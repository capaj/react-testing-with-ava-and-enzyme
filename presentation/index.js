// Import React
import React from 'react'

// Import Spectacle Core tags
import { Appear, BlockQuote, Cite, CodePane, Deck, Fill, Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text } from 'spectacle'
import CodeSlide from 'spectacle-code-slide'
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
  ava: require('../assets/header.png'),
  arrow: require('../assets/right-arrow.svg')
}

preloader(images)

const theme = createTheme({
  primary: '#E53638',
  secondary: '#ffffff',
  tertiary: 'black'
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
          <Text bold caps textColor='secondary'>
            Disclaimer: I am with STRV just 2 months.
          </Text>
          <Link href='https://github.com/capaj/react-testing-with-ava-and-enzyme'>
          <Text bold caps textColor='tertiary'>
            View on Github
          </Text>
          </Link>
        </Slide>
        <Slide transition={['slide']} bgColor='black' notes="There are far too many specialized terms in regards to testing web apps. I've seen any of these terms misused so often, they actually change meaning from company to company.">
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
              functional tests
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              E2E tests
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              integration, smoke, performance tests
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
        <Slide bgColor='black' bgDarken={0.7} bgImage={images.ava.replace("/", "")}>
          <Heading
            size={4}
            caps
            textColor='secondary'
            margin={10}>
            Your typical test runners:
          </Heading>

          <List>
            <ListItem bold>
              Mocha
            </ListItem>
          </List>
          <List>
            <ListItem bold>
              Jest
            </ListItem>
          </List>
          <Heading
            size={4}
            caps
            textColor='secondary'
            margin={10}>
            Why AVA?
          </Heading>
          <List>
          <ListItem>
            <Link bold href='https://github.com/sindresorhus/ava#table-of-contents'>speed(asynchronous execution)</Link>
          </ListItem>
          </List>
          <List>
            <ListItem>
              <Link bold href='https://github.com/power-assert-js/babel-plugin-espower#description'>power asserts</Link>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor='primary' notes="otherwise babel won't be using react babel preset">
          <Heading
              size={1}
              caps
              fit
              textColor='secondary'>
              When executing ava-inherit!
            </Heading>
          <CodePane lang='jsx' source={require('raw!../assets/deck.example')} style={{fontSize: 30}} margin='20px auto' />
        </Slide>
        <Slide transition={['slide']} bgDarken={0.75}>
          <Heading
            size={1}
            caps
            fit
            textColor='secondary'>
            Fast intro to AVA assertions
          </Heading>

          <CodePane lang='jsx' source={require('raw!../assets/ava-assertions.example')} style={{fontSize: 25}} margin='20px auto' />
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor='primary'>
          <Heading caps fit>
            airbnb/enzyme
          </Heading>
          <Layout>
            <Fill>
              <Appear>
                <Heading
                  size={4}
                  caps
                  textColor='tertiary'
                  bgColor='white'
                  margin={10}>
                    Shallow
                </Heading>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <Heading
                  size={4}
                  caps
                  textColor='tertiary'
                  bgColor='white'
                  margin={10}>
                    Full DOM
                </Heading>
              </Appear>
            </Fill>
            <Fill>
                <Appear>
              <Heading
                size={4}
                caps
                textColor='tertiary'
                bgColor='white'
                margin={10}>
                  Static
              </Heading>
              </Appear>
            </Fill>
          </Layout>
          <Layout>
          <Fill>
              <Heading
                size={4}
                caps
                textColor='tertiary'
                margin={10}>
                  Unit
              </Heading>
          </Fill>
            <Image src={images.arrow} margin="0px auto 40px" style={{marginTop: -5}} height="100px"/>
          <Fill>
            <Heading
              size={4}
              caps
              textColor='tertiary'
              margin={10}>
                functional
            </Heading>
          </Fill>
        </Layout>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="jsx"
          code={require("raw!../assets/shallow.spec.example")}
          ranges={[
            { loc: [2, 3], note: "Import it!" },
            { loc: [21, 22], note: 'Call it providing your component as only param' }
          ]}/>
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
