import React, { useEffect } from "react";
import Person1 from "../assets/person1.png";
import member8 from "../assets/team/member8.png";

import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

const Member8 = () => {
  const { t, i18n } = useTranslation();
  const isThaiLanguage = i18n.language === "th";

  useEffect(() => {
    Aos.init();

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="mb-3">
          <div className="row g-0 rounded-3 tw-bg-midnight">
            <div className="col-md-5 ">
              <img
                src={member8}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-7 px-3">
              <div className="card-body mt-4">
                <h4 className="tw-text-bone name text-sm-center">
                  {t("name8")}
                </h4>
                <h5 className="mt-2 mb-3 category text-sm-center tw-text-bone">
                  ({t("category8")})
                </h5>

                <div className="text-start py-2">
                  <h5 className="tw-text-bone">{t("list8A")}</h5>

                  <ul className="mt-3 mb-5 tw-text-start tw-text-bone">
                    <li>
                      <p>{t("list8Aa")}</p>
                    </li>
                    <li>
                      <p>{t("list8Ab")}</p>
                    </li>
                    <li>
                      <p>{t("list8Ac")}</p>
                    </li>
                    <li>
                      <p>{t("list8Ad")}</p>
                    </li>
                    <li>
                      <p>{t("list8Ae")}</p>
                    </li>
                    <li>
                      <p>{t("list8Af")}</p>
                    </li>
                  </ul>
                </div>

                <div className="text-start">
                  <h5 className="tw-text-bone">{t("list8B")}</h5>

                  <ul className="mt-3 mb-5 tw-text-bone">
                    <li>
                      <p>{t("list8Ba")} .</p>
                    </li>
                    <li className="my-2">
                      <p>{t("list8Bb")}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Member8;