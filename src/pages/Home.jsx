
import Banner from '../components/shared/home/Banner'
import BestSellingBooks from '../components/shared/home/BestSellingBooks'
import Books from '../components/shared/home/Books'
import FavouriteAuthors from '../components/shared/home/FavouriteAuthors'
import Newsletter from '../components/shared/home/Newsletter'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Books/>
        <BestSellingBooks/>
        <FavouriteAuthors/>
        <Newsletter/>
    </div>
  )
}

export default Home