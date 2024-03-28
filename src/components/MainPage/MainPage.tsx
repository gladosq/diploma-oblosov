import AutoList from '../AutoList/AutoList.tsx';
import Banner from '../Banner/Banner.tsx';
import CreateOfferForm from '../CreateOfferForm/CreateOfferForm.tsx';

export default function MainPage() {
  return (
    <>
      <Banner/>
      <AutoList/>
      <CreateOfferForm/>
    </>
  );
}
