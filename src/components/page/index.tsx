import React, { ReactElement } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import MenuBar from './elements/MenuBar';

type Props = {
  children: ReactElement
}

const Page = ({ children }: Props) => (
  <>
    <CssBaseline />
    <MenuBar />
    <Container>
      {children}
    </Container>
  </>
);

export default Page;
