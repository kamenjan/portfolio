import StackIcon from '../components/Svgs/StackIconSVG'
import KeyboardIcon from '../components/Svgs/KeyboardIconSVG'
import HomeIcon from '../components/Svgs/HomeIconSVG'
import CommunityIcon from '../components/Svgs/CommunityIconSVG'
import ToggleIcon from '../components/Svgs/ToggleIconSVG'
import InfoIcon from '../components/Svgs/InfoIconSVG'

const menuItems = [
  {
    icon: HomeIcon,
    value: 'Top',
    scrollTo: 'topScrollAnchor',
  },
  {
    icon: StackIcon,
    value: 'Stack',
    scrollTo: 'stackScrollAnchor',
  },
  {
    icon: KeyboardIcon,
    value: 'Work',
    scrollTo: 'workScrollAnchor',
  },
  {
    icon: CommunityIcon,
    value: 'Community',
    scrollTo: 'communityScrollAnchor',
  },
  {
    icon: ToggleIcon,
    value: 'Theme',
    toggleTheme: true,
    actionDescription: 'toggleTheme',
  },
  {
    icon: InfoIcon,
    value: 'Info',
    actionDescription: 'openModal',
  },
]
export default menuItems
