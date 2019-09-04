import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';

import Marker from '../map/Marker.jsx';

class SelfishRoutingArticlePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: [['N9VRR4ZU', 2016, 'Hendrix, Steve', 'Traffic-weary homeowners and Waze are at war, again. Guess who’s winning? - The Washington Post', 'Washington Post', 'https://www.washingtonpost.com/local/traffic-weary-homeowners-and-waze-are-at-war-again-guess-whos-winning/2016/06/05/c466df46-299d-11e6-b989-4e5479715b54_story.html', 38.974764, -77.001135],
['JQL9GVPG', 2016, 'Marshall, Aarian', 'There Are Better Ways to Kill Traffic Than Lying to Waze - WIRED', 'Wired', 'https://www.wired.com/2016/07/better-ways-kill-traffic-lying-waze/', 37.254561, -121.963475],
['2QJUU35A', 2000, 'Roughgarden, Tim; Tardos, Eva', 'How Bad is Selﬁsh Routing? - IEEE', 'IEEE', 'https://ieeexplore.ieee.org/document/892069', 37.870668, -122.286873],
['K8LZGJW8', 2016, 'McCarty, Meghan', 'The Road Less Traveled? Not Since Waze Came To Los Angeles - npr.org', 'NPR', 'https://www.npr.org/sections/alltechconsidered/2016/06/13/481871496/the-road-less-traveled-not-since-waze-came-to-los-angeles', 34.146468, -118.470726],
['ZDUXEX2E', 2015, 'J. Nelson, Laura', 'California Commute: New traffic apps may be pushing cars into residential areas - Los Angeles Times', 'Los Angeles Times', 'https://www.latimes.com/local/california/la-me-california-commute-20150106-story.html', 34.132862, -118.462576],
['FWT7TUJJ', 2017, 'W. Federaro, Lisa', 'Navigation Apps Are Turning Quiet Neighborhoods Into Traffic Nightmares - The New York Times', 'The New York Times', 'https://www.nytimes.com/2017/12/24/nyregion/traffic-apps-gps-neighborhoods.html', 40.862773, -73.977300],
['IS6MEKBS', 2018, 'WABC Staff', 'New Jersey town begins issuing $200 tickets to non-local drivers during rush hour - abc7', 'WABC', 'https://abc7ny.com/3038052/', 40.862952, -73.987200],
['ATHJ74NK', 2014, 'Broverman, Neal', 'Fed-up Westsiders, Valley-ites Trying to Bring Down Waze - Los Angeles Magazine', 'Los Angeles Magazine', 'https://www.lamag.com/driver/fed-westsiders-valley-ites-trying-bring-waze/', 40.862952, -73.987158],
['2VPXU74C', 2018, 'Broverman, Neal', 'In the War Over Waze, Will Rich Angelenos Demand Private Streets? - Los Angeles Magazine', 'Los Angeles Magazine', 'https://www.lamag.com/driver/waze-war/', 34.121916, -118.340200],
['5HZT7B6M', 2018, 'California News Wire Services', 'LA Leader Seeks To Sue Waze For Endangering Sherman Oaks - Patch.com', 'Sherman Oaks, CA Patch', 'https://patch.com/california/shermanoaks/la-leader-seeks-sue-waze-endangering-sherman-oaks', 34.163373, -118.454230],
['4U4GEFIV', 2017, 'Bartholomew, Dana', 'Sherman Oaks residents blame Waze navigation app for clogging streets – Los Angeles Daily News', 'Los Angeles Daily News', 'https://www.dailynews.com/2017/01/11/sherman-oaks-residents-blame-waze-navigation-app-for-clogging-streets/', 34.147632, -118.451608],
['KUP3EHYD', 2018, 'Rand, Jory', 'Sherman Oaks road repair ruined as Waze commuters plow through small neighborhood - abc7', 'ABC7 Los Angeles', 'https://abc7.com/3604466/', 33.999819, -118.365054],
['6TF8AYMT', 2017, 'LaCasse, Alex', 'Seacoast prepares for next wave of traffic - seacoastonline.com', 'The Portsmouth Herald', 'https://www.seacoastonline.com/news/20170704/seacoast-prepares-for-next-wave-of-traffic', 43.086866, -70.760904],
['KFBCVZTK', 2017, 'Reed, Megan', 'Marietta Police field questions about cut-through traffic at town hall - MARIETTA DAILY JOURNAL', 'Marietta Daily Journal', 'https://www.mdjonline.com/news/marietta-police-field-questions-about-cut-through-traffic-at-town/article_2894ed4e-6e82-11e7-b286-4bfbd97f3aab.html', 33.953900, -84.556936],
['I5LR769I', 2017, 'Peterson, Gary', 'Walnut Creek commute a drag, but one intersection stands out - EAST BAY TIMES', 'East Bay Times', 'https://www.eastbaytimes.com/2017/07/22/x-marks-the-most-dangerous-intersection-in-walnut-creek-can-you-guess-where/', 37.906222, -122.061994],
['F9SJ43KC', 2017, 'Grabar, Henry', 'Suburbs Finally Figured Out a Way to Get Rid of Pesky Drivers on Waze Shortcuts - SLATE', 'Slate Magazine', 'https://slate.com/business/2017/06/suburbs-finally-figured-out-a-way-to-get-rid-of-pesky-drivers-on-waze-shortcuts.html', 37.373297, -122.144798],
['IV7XXXWK', 2017, 'Richards, Gary', 'Roadshow: Stay off my street! Waze woes spreading - The Mercury News', 'The Mercury News', 'https://www.mercurynews.com/2017/06/25/roadshow-stay-off-my-street-waze-woes-spreading-to-more-cities/', 37.223475, -121.979580],
['2JFV38L9', 2017, 'Alford, Abbie', 'Rainbow residents protest commuter shortcuts - CBS8', 'KFMB', 'https://www.cbs8.com/article/news/rainbow-residents-protest-commuter-shortcuts/509-95563e3b-0c10-43e9-9c35-1fa946dedfa0', 37.297068, -122.015045],
['5INURJBE', 2014, 'Monzon, Inigo', 'Waze App Angers California Residents Due To Increased Traffic In Neighborhoods - Design & Trend', 'Design & Trend', 'https://drive.google.com/file/d/0BwjBG-ErI8dhclBjSEpJYWlUVW8/view?usp=embed_facebook', 34.185925, -118.884307],
['ZCGFYKFA', 2014, 'Associated Press', 'Popular smartphone app causes traffic jam uproar in California neighborhoods - Fox News', 'Fox News', 'https://drive.google.com/file/d/0BwjBG-ErI8dhc3Jma0lnU1ppU2M/view?usp=embed_facebook', 34.163373, -118.454230],
['XA9U3R2T', 2017, 'Weise, Elizabeth', 'Waze and other traffic dodging apps prompt cities to game the algorithms - USATODAY', 'USA Today', 'https://www.usatoday.com/story/tech/news/2017/03/06/mapping-software-routing-waze-google-traffic-calming-algorithmsi/98588980/', 37.498641, -121.954073],
['W65CYZBI', 2014, 'Associated Press', 'Residents outrage after Waze app used to avoid traffic ends up sending Los Angeles drivers down once quiet \'hidden street\' - Daily Mail', 'Mail Online', 'https://www.dailymail.co.uk/news/article-2873468/People-finding-waze-hidden-streets.html', 34.163373, -118.454230],
['G5LQ7XNN', 2017, 'Moessinger, Debbie', 'Waze/Google Maps Ruining Los Gatos Neighborhoods! - change.org', 'Change.org', 'https://www.change.org/p/waze-google-maps-ruining-our-neighborhoods', 37.236460, -121.918650],
['6JZ88WXC', 2017, 'Wilfon, Justin', 'City manipulates Waze information to steer drivers off side streets - WSB-TV', 'WSB', 'https://www.wsbtv.com/news/local/atlanta/city-manipulates-waze-information-to-steer-drivers-off-side-streets/512417349', 33.763441, -84.383522],
['N43Y4KVI', 2017, 'Peterson, Judy', 'Los Gatos: Resident launches beach traffic petition - The Mercury News', 'The Mercury News', 'https://www.mercurynews.com/2017/06/30/online-petition-targets-waze-google-maps/', 37.223475, -121.979580],
['DJWYMP5R', 2016, 'Sanchez, Jesús', 'Get the Waze out of here! Echo Park residents blame apps for sending traffic to steep streets - The Eastider', 'The East Sider', 'https://www.theeastsiderla.com/news/transportation_and_traffic/get-the-waze-out-of-here-echo-park-residents-blame/article_640877cf-47d2-5ba1-b9b7-1f3958fe9db7.html', 34.091721, -118.254788],
['SLADHH3S', 2016, 'Richards, Gary', 'Is Google’s Waze app making traffic worse? – The Mercury News', 'Mercury News', 'https://www.mercurynews.com/2016/01/21/is-googles-waze-app-making-traffic-worse/', 37.223475, -121.979580],
['YIM7EN6F', 2014, 'Rogers, John', 'LA Traffic Is Getting Worse And People Are Blaming The Shortcut App Waze - Business Insider', 'Business Insider', 'https://www.businessinsider.com/la-traffic-is-getting-worse-and-people-are-blaming-the-shortcut-app-waze-2014-12', 34.163373, -118.454230],
['FMVHVEPC', 2014, 'Baskas, Harriet', 'Waze app makes drivers faster, residents furious - CNBC', 'CNBC', 'https://www.cnbc.com/2014/12/22/waze-app-makes-drivers-faster-residents-furious.html', 34.163373, -118.454230],
['KU669JA4', 2014, 'B. Lifkin, Shimon', 'Herzliya Residents Sue Waze for Disturbing the Peace - Hamodia.com', 'Hamodia', 'https://hamodia.com/2016/12/01/herzliya-residents-sue-waze-disturbing-peace/', 32.808936, 34.999010],
['UJDF7XIX', 2014, 'Salem, Dina Abou', 'LA Neighborhood Blames Waze App for Morning Traffic Jams - abc News', 'ABC News', 'http://abcnews.go.com/blogs/headlines/2014/12/la-neighborhood-blames-waze-app-for-morning-traffic-jam', 34.163373, -118.454230],
['PYK286NR', 2016, 'Hopkins, Elizabeth', 'Map apps crowding quiet streets with cut-through traffic, Quincy councilor says - Boston 23 news', 'WFXT', 'https://www.boston25news.com/news/map-apps-crowding-quiet-streets-with-cut-through-traffic-quincy-councilor-says/467515255', 42.267811, -71.016324],
['2E2ESMRM', 2014, 'Tam, Donna', '​Locals upset at Google\'s Waze for sending traffic to their streets - Cnet', 'CNET', 'https://www.cnet.com/news/locals-upset-at-googles-waze-for-sending-traffic-to-their-streets/', 33.999819, -118.365054],
['GE7BGFEG', 2014, 'Walker, Alissa', 'Is It Really Possible To Trick Waze To Keep Traffic Off Your Street? - Gizmodo', 'Gizmodo', 'https://gizmodo.com/is-it-really-possible-to-trick-waze-to-keep-traffic-off-1660273215', 34.121916, -118.340200],
['LGQJ3RCN', 2016, 'Geha, Joseph', 'Fremont: City takes steps to keep commuters on freeways and off its streets - Cody Rd & Woodcliff Rd Los Angeles, CA 91403', 'East Bay Times', 'https://www.eastbaytimes.com/2016/11/10/fremont-city-takes-steps-to-keep-commuters-on-freeways-and-off-its-streets/', 37.536649, -121.919027],
['5GBYMNKM', 2015, 'Barragan, Bianca', 'LA City Councilmember Wants to Make  Waze Useless - LA Curbed', 'Curbed LA', 'https://la.curbed.com/2015/4/28/9966152/la-city-councilmember-wants-to-make-waze-useless', 34.121916, -118.340200],
['MSWC4M85', 2016, 'Brunhuber, Kim', 'Shortcut-finding app Waze creating residential traffic headaches in L.A. - CBC News', 'CBC', 'https://www.cbc.ca/news/technology/shortcut-app-waze-1.3463004', 34.093511, -118.327411],
['28PSIQE3', 2014, 'Barragan, Bianca', 'Westsiders Freaking That People Are Driving By Their Houses - LA Curbed', 'Curbed LA', 'https://la.curbed.com/2014/12/15/10011552/westsiders-freaking-out-that-people-are-driving-by-their-houses', 33.999819, -118.365054],
['SYLU44GA', 2016, 'Bagby, Dyana', 'Reporter analysis: Waze directions send traffic through quiet streets - Reporter Newspapers', 'Reporter Newspapers', 'https://www.reporternewspapers.net/2016/09/02/reporter-analysis-waze-directions-send-traffic-quiet-streets/', 33.957204, -84.333049],
['B8QYEGX9', 2015, 'Bliss, Laura', 'Waze Is Worsening Traffic In Some L.A. Neighborhoods. What Should the City Do? - CityLab', 'CityLab', 'https://www.citylab.com/transportation/2015/04/las-lovehate-relationship-with-waze-continues/391832/', 33.999819, -118.365054],
['S6J3TYN5', 2016, 'Thornton, Paul', 'How an app destroyed their streets- Readers count the Waze - LA TIMES', 'Los Angeles Times', 'https://drive.google.com/file/d/0BwjBG-ErI8dhbVNCX1Q3MThxaFU/view?usp=embed_facebook', 34.132907, -118.462598],
['XKZ9MUDJ', 2015, 'WEHO Staff', 'Ashcroft Residents Work to Stop \'Waze Craze\' Traffic - WEHO VILLE', 'WEHO', 'https://www.wehoville.com/2015/05/01/ashcroft-residents-work-to-stop-waze-craze-traffic/', 34.078928, -118.38550]],
    }
  }

  render() {

    return (
      <div style={{width: '100%', height: '800px'}}>
       <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCULcgZ0hCCd-SwlrAUfqy2bOTur3-UVhQ" }}
        defaultCenter={{lat: 37.87, lng: -122.27}}
        defaultZoom={11}
      >
      {this.state.values.map((value, index) => {
        return <Marker
          key={value.id}
          lat={value[6]}
          lng={value[7]}
          text={value[3]}
          link={value[5]}
        />
      })}
      </GoogleMapReact>
    </div>
    );
  }
}

export default SelfishRoutingArticlePage;
