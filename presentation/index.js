// Import React
import React from 'react'

// Import Spectacle Core tags
import { Appear, BlockQuote, Cite, CodePane, Deck, Fill, Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text } from 'spectacle'

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Import custom component
import Interactive from '../assets/interactive'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const images = {
  ava: require('../assets/header.png')
}

preloader(images)

const theme = createTheme({
  primary: '#E53638',
  secondary: '#ffffff'
})

export default class Presentation extends React.Component {
  render () {
    return (
    <Spectacle theme={theme}>
      <Deck transition={['zoom', 'slide']} transitionDuration={500}>
        <Slide transition={['zoom']} bgColor='primary'>
          <Heading
            size={1}
            fit
            caps
            lineHeight={1}
            textColor='black'>
            Testing React.js applications
          </Heading>
          <Link href='https://github.com/capaj/react-testing-with-ava-and-enzyme'>
          <Text bold caps textColor='tertiary'>
            View on Github
          </Text>
          </Link>
        </Slide>
        <Slide transition={['slide']} bgColor='black' notes='There are far too many specialized terms in regards to testing web apps.'>
          <Heading
            size={2}
            caps
            fit
            textColor='primary'
            textFont='primary'>
            Testing terminology
          </Heading>
          <Appear>
            <ListItem style={{
              color: 'white',
              backgroundColor: 'red'
            }}>
              unit tests
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              midway tests
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              smoke tests
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              integration, functional, E2E tests
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <Link href='http://www.aptest.com/glossary.html'>couple more terms</Link>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              ... is rich and convoluted
            </ListItem>
          </Appear>
        </Slide>
        <Slide bgColor='black' bgDarken={0.5} bgImage={images.ava.replace("/", "")}>
          Your typical test runners:
          <List>
            <ListItem>
              Mocha
            </ListItem>
          </List>
          <List>
            <ListItem>
              Jest
            </ListItem>
          </List>
          <Heading
            size={2}
            caps
            textColor='secondary'
            margin={10}>
            Why AVA?
          </Heading>
          <List>
          <ListItem>
            <Link href='https://github.com/sindresorhus/ava#table-of-contents'>speed(asynchronous execution)</Link>
          </ListItem>
          </List>
          <List>
            <ListItem>
              <Link href='https://github.com/power-assert-js/babel-plugin-espower#description'>power asserts</Link>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor='primary' notes='<ul><li>talk about that</li><li>and that</li></ul>'>
          <CodePane lang='jsx' source={require('raw!../assets/deck.example')} margin='20px auto' />
        </Slide>
        <Slide transition={['slide']} bgDarken={0.75}>
          <Appear fid='1'>
            <Heading
              size={1}
              caps
              fit
              textColor='primary'>
              Full Width
            </Heading>
          </Appear>
          <Appear fid='2'>
            <Heading
              size={1}
              caps
              fit
              textColor='tertiary'>
              Adjustable Darkness
            </Heading>
          </Appear>
          <Appear fid='3'>
            <Heading
              size={1}
              caps
              fit
              textColor='primary'>
              Background Imagery
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor='primary'>
          <Heading caps fit>
            Flexible Layouts
          </Heading>
          <Layout>
            <Fill>
              <Heading
                size={4}
                caps
                textColor='secondary'
                bgColor='white'
                margin={10}>
                Left
              </Heading>
            </Fill>
            <Fill>
              <Heading
                size={4}
                caps
                textColor='secondary'
                bgColor='white'
                margin={10}>
                Right
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['slide']} bgColor='black'>
          <BlockQuote>
            <Quote>
              Wonderfully formatted quotes
            </Quote>
            <Cite>
    Ken Wheeler
    </Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['spin', 'zoom']} bgColor='tertiary'>
          <Heading
            caps
            fit
            size={1}
            textColor='primary'>
            Inline Markdown
          </Heading>

        </Slide>
        <Slide transition={['slide', 'spin']} bgColor='primary'>
          <Heading
            caps
            fit
            size={1}
            textColor='tertiary'>
            Smooth
          </Heading>
          <Heading
            caps
            fit
            size={1}
            textColor='secondary'>
            Combinable Transitions
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <List>
            <Appear>
              <ListItem>
                Inline style based theme system
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Autofit text
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Flexbox layout system
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                React-Router navigation
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                PDF export
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                And...
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor='primary'>
          <Heading
            size={1}
            caps
            fit
            textColor='tertiary'>
            Your presentations are interactive
          </Heading>
          <Interactive/>
        </Slide>
        <Slide transition={['spin', 'slide']} bgColor='tertiary'>
          <Heading
            size={1}
            caps
            fit
            lineHeight={1.5}
            textColor='primary'>
            Made with love at STRV by
          </Heading>
          <Link href='http://www.github.com/capaj' style={{color: '#333333'}}>
            Jiří Špác
          </Link>
        </Slide>
      </Deck>
    </Spectacle>
    )
  }
}
