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
        <Slide bgColor='secondary' textColor='primary' notes='testing such a function is trivial-surely you have all good experience with testing these. You just call it and compare the output with the expected value.'>
          <Heading
            size={4}
            caps
            textColor='primary'
            margin={10}>
            How do we test React.js?
          </Heading>
          <Appear>
            <Heading
              size={4}
              caps
              textColor='primary'
              margin={10}>
              What is React.js application?
            </Heading>
          </Appear>
          <br/>
            <br/>
          <Appear>
            <Text bold textColor='primary'>
              app = f(state)
            </Text>
          </Appear>
            <br/>
            <br/>
          <Appear>
            <Text>
              f is magic
            </Text>
          </Appear>
          <Appear>
            <Text>
              f are your react components composed into one function
            </Text>
          </Appear>
          <br/>
          <Appear>
            <Text>
              f is not a collection of templates/functions which are executed/compiled in non standard manner with special rules
            </Text>
          </Appear>
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
        <Slide bgColor='black' bgDarken={0.7} bgImage={images.ava.replace("/", "")} notes='but before we show enzyme in action, it would be a good idea to have a test runner. We could run enzyme just raw without any test runner, but that would not scale'>
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
        <Slide transition={['slide']} bgDarken={0.75} notes='ava provide a small comprehensive set of assertions, which are all on first parameter of the test callback function'>
          <Heading
            size={1}
            caps
            fit
            textColor='secondary'>
            Fast intro to AVA assertions
          </Heading>

          <CodePane lang='jsx' source={require('raw!../assets/ava-assertions.example')} style={{fontSize: 25}} margin='20px auto' />
        </Slide>
        <Slide transition={['slide', 'spin']} bgColor='primary' notes='And lets see how they would work together on our next codeslide.'>
          <Heading
              size={1}
              caps
              fit
              textColor='secondary'>
              Ava + Enzyme
            </Heading>

        </Slide>
        <CodeSlide
          transition={[]}
          lang="jsx"
          code={require("raw!../assets/shallow.spec.example")}
          ranges={[
            { loc: [5, 21]},
            { loc: [1, 2], note: "Import ava" },
            { loc: [2, 3], note: "Import enzyme methods" },
            { loc: [21, 22], note: 'Call it providing your component as only param' },
            { loc: [33, 34], note: 'Throws' }
          ]}/>
        <Slide transition={['slide', 'spin']} bgColor='primary' notes='Enzyme is a straightfoward library, but when it comes to full dom rendering, it uses JSDOM. JSDOM is not included-you can choose your own DOM implementation.'>
          <Heading
              size={1}
              caps
              fit
              textColor='secondary'>
              You need a DOM
            </Heading>
          <CodePane lang='jsx' source={require('raw!../assets/jsdom.example')} style={{fontSize: 30}} margin='20px auto' />
        </Slide>
        <CodeSlide
          transition={[]}
          lang="jsx"
          code={require("raw!../assets/static.example")}
          ranges={[
            { loc: [2, 3], note: "Import method" },
            { loc: [21, 22]}
          ]}/>
        <Slide>
          <Heading>
            Obligatory links slide:
          </Heading>
          <List>
            <ListItem>
              <Link href='https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md'>
                Shallow API
              </Link>
            </ListItem>
            <ListItem>
              <Link href='https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md'>
                Full DOM API
              </Link>
            </ListItem>
            <ListItem>
              <Link href='http://cheeriojs.github.io/cheerio/'>
                Static render API(cheerio)
              </Link>
            </ListItem>
          </List>

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
          <Link href='http://www.github.com/capaj' style={{color: '#999999'}}>
            Jiří Špác
          </Link>
        </Slide>
      </Deck>
    </Spectacle>
    )
  }
}
