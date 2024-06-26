import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import HomePage from "../pages/HomePage";
import ContactUs from "../pages/ContactUs";
import Services from "../pages/Services";
import Team from "../pages/Team";
import NotFound from "../pages/NotFound";
import SectionA from "../pages/Sub-Services/SectionA";
import SectionA1 from "../pages/Sub-Services/SectionA1";
import SectionB from "../pages/Sub-Services/SectionB";
import SectionC from "../pages/Sub-Services/SectionC";
import SectionA2 from "../pages/Sub-Services/SectionA2";
import SectionA3 from "../pages/Sub-Services/SectionA3";
import SectionA4 from "../pages/Sub-Services/SectionA4";
import SectionA5 from "../pages/Sub-Services/SectionA5";
import Product from "../pages/Product";
import Member from "../pages/Member";
import ProductA from "../pages/Sub-Products/ProductA";
import ProductB from "../pages/Sub-Products/ProductB";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/products/Mind-Magnifying",
        element: <ProductA />,
      },
      {
        path: "/products/Mind-Exercise-Vol1",
        element: <ProductB />,
      },
      {
        path: "/services/PsychologicalSupport-Psychotherapy-Counseling",
        element: <SectionA />,
      },
      {
        path: "/services/PsychologicalSupport-Psychotherapy-Counseling/ListeningServiceandMindfulnessPractice",
        element: <SectionA1 />,
      },

      {
        path: "/services/Healing-Therapy",
        element: <SectionB />,
      },

      {
        path: "/services/Body-Mind-SoulMixologyService",
        element: <SectionC />,
      },

      {
        path: "/services/PsychologicalSupport-Psychotherapy-Counseling/Counseling",
        element: <SectionA2 />,
      },
      {
        path: "/services/PsychologicalSupport-Psychotherapy-Counseling/Psychotherapy",
        element: <SectionA3 />,
      },
      {
        path: "/services/PsychologicalSupport-Psychotherapy-Counseling/ArtsPsychotherapy",
        element: <SectionA4 />,
      },
      {
        path: "/services/PsychologicalSupport-Psychotherapy-Counseling/TherapeuticWorkshop",
        element: <SectionA5 />,
      },
      {
        path: "/team",
        element: <Team />,
      },

      {
        path: "/team/:id",
        element: <Member />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
