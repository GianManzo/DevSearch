import * as C from './styles';
import { MapPin, Link, TwitterLogo, Buildings } from 'phosphor-react';

export const Profile = () => {
  return (
    <>
      <C.Wrapper>
        <C.Infos>
          <div>
            <C.Image src='https://github.com/gianmanzo.png' alt='' />
          </div>
          <C.BoxInfo>
            <p>Gian Manzo</p>
            <p>
              <a href='https://github.com/'>Empresa</a>
            </p>
            <p>Joined 25 Jan 2011</p>
          </C.BoxInfo>
        </C.Infos>
        <C.Summary>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil aperiam aliquam saepe
            laudantium voluptatibus vitae eius, aut deserunt mollitia nesciunt quis officia
            perferendis vero doloribus odio consectetur, dolores aspernatur inventore.
          </p>
        </C.Summary>
        <C.Display>
          <ul>
            <li>
              Repos <p>8</p>
            </li>
            <li>
              Followers <p>8</p>
            </li>
            <li>
              Following <p>8</p>
            </li>
          </ul>
        </C.Display>
        <C.Footer>
          <ul>
            <li>
              <MapPin weight='bold' /> Brazil
            </li>
            <li>
              <a href='https:github.com/'>
                <Link weight='bold' />
                link...
              </a>
            </li>
            <li>
              <a href='https://twitter.com/'>
                <TwitterLogo weight='bold' />
                twitter..
              </a>
            </li>
            <li>
              <Buildings weight='bold' />
              empresa
            </li>
          </ul>
        </C.Footer>
      </C.Wrapper>
    </>
  );
};
