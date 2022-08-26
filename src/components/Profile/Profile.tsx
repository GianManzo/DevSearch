import * as C from './styles';
import { MapPin, Link, TwitterLogo, Buildings } from 'phosphor-react';
import { IData } from '~/interfaces/IData';
import { Error } from '../Helpers/Error';
import { Home } from '../Home/Home';

type Props = {
  data: IData | null;
  error: boolean;
  validation: boolean;
};

export const Profile = ({ data, error, validation }: Props) => {
  if (data === null) {
    if (error || !validation) {
      return <Error>{!validation ? 'Fill in the field!' : 'User not found!'}</Error>;
    }
    return <Home />;
  }

  return (
    <>
      {!validation && <Error>Fill in the field!</Error>}
      {error ? (
        <Error>User not found!</Error>
      ) : (
        <C.Wrapper>
          <C.Infos>
            <div>
              <C.Image src={data?.avatar_url} alt='' />
            </div>
            <C.BoxInfo>
              <p>{data?.name}</p>
              <p>
                <a href='https://github.com/'>{data?.company}</a>
              </p>
              <p>Joined 25 Jan 2011</p>
            </C.BoxInfo>
          </C.Infos>
          <C.Summary>
            <p>{data?.bio}</p>
          </C.Summary>
          <C.Display>
            <ul>
              <li>
                Repos <p>{data?.public_repos}</p>
              </li>
              <li>
                Followers <p>{data?.followers}</p>
              </li>
              <li>
                Following <p>{data?.following}</p>
              </li>
            </ul>
          </C.Display>
          <C.Footer>
            <ul>
              <li>
                <MapPin weight='bold' /> {data?.location}
              </li>
              <li>
                <a href={data?.html_url} target='_blank' rel='noreferrer'>
                  <Link weight='bold' />
                  {data?.html_url}
                </a>
              </li>
              <li>
                <a
                  href={`https://twitter.com/${data?.twitter_username}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  <TwitterLogo weight='bold' />
                  twitter
                </a>
              </li>
              <li>
                <Buildings weight='bold' />
                {data?.company}
              </li>
            </ul>
          </C.Footer>
        </C.Wrapper>
      )}
    </>
  );
};
