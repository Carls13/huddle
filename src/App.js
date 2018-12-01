import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import PlainSection from './components/PlainSection/PlainSection';
import ImageSection from './components/ImageSection/ImageSection';
import Footer from './components/Footer/Footer';
import StatsList from './containers/StatsList/StatsList';
import mockups from './screen-mockups.svg';
import growTogether from './illustration-grow-together.svg';
import flowingConversations from './illustration-flowing-conversation.svg';
import yourUsers from './illustration-your-users.svg';
import top1 from './bg-section-top-desktop-1.svg';
import bottom1 from './bg-section-bottom-desktop-1.svg';
import top2 from './bg-section-top-desktop-2.svg';
import bottom2 from './bg-section-bottom-desktop-2.svg';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>   
        <PlainSection hasSubtitle={true} 
        titleText={'Build The Community Your Fans Will Love'}
        buttonText={'Get Started For Free'}/>
        <img src={mockups} className="center" alt="logo" />
        <StatsList/>
        <ImageSection image={growTogether} 
        title={'Grow Together'}
        subtitle={'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form'}
        imagePosition={'right'}
        top={top1}
        bottom={bottom1}/>
        <ImageSection image={flowingConversations} 
        title={'Flowing Conversations'}
        subtitle={"You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."}
        imagePosition={'left'}/>
        <ImageSection image={yourUsers} 
        title={'Your Users'}
        subtitle={"It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."}
        imagePosition={'right'}
        top={top2}
        bottom={bottom2}/>
        <PlainSection hasSubtitle={false} 
        titleText={'Ready To Build Your Community?'}
        buttonText={'Get Started For Free'}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
