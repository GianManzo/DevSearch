import * as C from './styles';
import { MapPin, Link, TwitterLogo, Buildings } from 'phosphor-react';
import { IData } from '~/interfaces/IData';
import { Error } from '../Helpers/Error/Error';
import { Home } from '../Home/Home';
import { handleDate } from '../Helpers/Date/Date';

type Props = {
  data: IData | null;
  error: boolean;
  validation: boolean;
};

export const Profile = ({ data, error, validation }: Props) => {
  console.log(data);
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
              {data !== null && <p>Update: {handleDate(data?.updated_at)}</p>}
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
                {data.company !== null ? data.company : 'Not Found'}
              </li>
            </ul>
          </C.Footer>
        </C.Wrapper>
      )}
    </>
  );
};
