import React from 'react';

import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { AccordionContainer as FaqsContainer } from '../containers/faqs';

export default function Home() {
    return (<>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
    </>);
}