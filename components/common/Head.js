import NextHead from 'next/head';

const defaultDesc = "My ToDo List";

const Head = props => (
      <NextHead>
            <meta charSet="UTF-8" />
            <title>{ props.title || "" }</title>
            <meta name="description" content={ props.description || defaultDesc } />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
      </NextHead>
);

export default Head;