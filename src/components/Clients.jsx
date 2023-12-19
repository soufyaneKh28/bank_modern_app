import { airbnb, binance, coinbase, dropbox } from "../assets";
import styles from "../style";
import { clients } from "../constants";
const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`md:flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]::`}
        >
          <img
            src={client.logo}
            alt={client.id}
            className="sm:w-[192px] w-[100px] h-[37px] object-contain m-5"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
