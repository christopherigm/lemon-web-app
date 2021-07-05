import React from 'react';
import { useSelector } from 'react-redux';
import EnvironmentVariables from 'src/constants/EnvironmentVariables';

const env = EnvironmentVariables.getInstance();
const isMobileApp = env.isMobileApp;

const Footer = (): React.ReactElement => {
  const system = useSelector((state: any) => state.system);

  return (
    <footer className='page-footer blue Footer'>
      <div className='footer-copyright Footer__copyright'>
        <div className='container'>
          <span>V. {env.version} ({system.platform.os} - {env.branchName} build) </span>
          { !isMobileApp ?
            <>
            - <a
                href='/static/app.apk'
                className='white-text'
              >Get mobile App</a>
            </>
            : null
          }
        </div>
      </div>
    </footer>
  );
};

export default Footer;
