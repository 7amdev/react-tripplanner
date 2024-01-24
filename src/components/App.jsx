import Select from "react-select";

const options = [
  { value: 'chocolate', label: 'Sort by default' },
  { value: 'strawberry', label: 'Sort by packed' },
  { value: 'vanilla', label: 'Sort by unpacked' }
]

export default function App() {
  return (
    <>   
      <h1 className="background-heading">Tripplanner</h1>
      <section className="container">
        <header className="header header_secondary">
          <img src="" alt="logo" />
          <p className="header__info"><b>1</b> / 3 items packed</p>
        </header>
        <main className="main">
          <ul className="list main__list">
            <Select 
              className="list__sort" 
              options={options} 
              value={options[0]}
            />
            <li className="list__item">
              <label className="list__label">
                <input type="checkbox" className="list__checkbox" />
                Good mood
              </label>
              <button className="list__button">
                <svg className="list__icon" viewBox="0 0 15 15" >
                  <path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
              </button>
            </li>
            <li className="list__item">
              <label className="list__label">
                <input type="checkbox" className="list__checkbox" />
                Passport
              </label>
              <button className="list__button">
                <svg className="list__icon" viewBox="0 0 15 15" >
                  <path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
              </button>
            </li>
            <li className="list__item">
              <label className="list__label">
                <input type="checkbox"  className="list__checkbox"/>
                Phone charger
              </label>
              <button className="list__button">
                <svg className="list__icon" viewBox="0 0 15 15" >
                  <path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
              </button>
            </li>
          </ul>
          <div className="sidebar main__sidebar">
            <form action="#" className="form form_add-item">
              <input type="text" className="input form__input" placeholder="Toothbrush" />
              <button className="button form__submit">Add to list</button>
            </form>
            <section className="button-group">
              <button className="button button_fs_14px button_mb_10px button_bc_lg">Mark all as complete</button>
              <button className="button button_fs_14px button_mb_10px button_bc_lg">Mark all as incomplete</button>
              <button className="button button_fs_14px button_mb_10px button_bc_lg">Reset to initial</button>
              <button className="button button_fs_14px button_mb_10px button_bc_lg">Remove all items</button>
            </section>
          </div>
        </main>
      </section>
      <footer className="footer">
        <small className="footer__copyright">&copy; 2024 Copyright by Alfredom.</small>
        <small className="footer__version">Version 1.5</small>
      </footer>
    </>
  );
}
