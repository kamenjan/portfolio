import StackIcon from '../components/Svgs/StackIconSVG'
import KeyboardIcon from '../components/Svgs/KeyboardIconSVG'
import HomeIcon from '../components/Svgs/HomeIconSVG'
import CommunityIcon from '../components/Svgs/CommunityIconSVG'

const navMenuData = {
  itemHeight: 42,
  items: [
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
  ],
}
export default navMenuData
