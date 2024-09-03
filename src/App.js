import './App.css';
import style from './home.module.css';

function App() {
  return (
    <div className={style.container}>
      <div className={style.left_section}>
        <img src="./photo_2024-09-03_17-20-38.png" alt="Zuzu" className={style.image} />
      </div>
      <div className={style.right_section}>
        <h1 className={style.title}>$CHEF DOG</h1>
        <p className={style.subtitle}>Are you cooking with me?</p>

        <p className={style.subtitle_two}>
          First Chef Dog is making history as the first-ever chef dog to launch on the Chef.fun platform! 🍖 This isn’t just a meme coin – it’s a culinary crypto revolution, leading the pack with flavor and flair on the ETH blockchain. Get in early, because this degen dog is about to serve up moonshots 🚀 and FOMO like never before!  🔥
        </p>

        <div className={style.buttons_container}>
          <a href="https://x.com/Chefdog_eth" target="_blank" rel="noopener noreferrer">
            <button className={style.button}>Twitter</button>
          </a>
          <a href="https://t.me/Chefdogeth" target="_blank" rel="noopener noreferrer">
            <button className={style.button}>Telegram</button>
          </a>
          
          <a href="https://app.uniswap.org/swap?outputCurrency=0xc9c2361a8b63130f0c1eec4afdf43df22543cfe2" target="_blank" rel="noopener noreferrer">
            <button className={style.button_buy}>BUY NOW</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
