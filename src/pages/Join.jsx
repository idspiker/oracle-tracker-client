import AppHeader from '../components/AppHeader';
import AppBody from '../components/AppBody';

export default function Join() {
  return (
    <div>
      <AppHeader />
      <AppBody>
        <h2 className='center-text margin-beneath'>
          Please enter your join code
        </h2>
        <form className='form-section'>
          <input
            type='text'
            className='form-input margin-above margin-beneath'
          ></input>
          <button className='form-btn'>JOIN</button>
        </form>
      </AppBody>
    </div>
  );
}
