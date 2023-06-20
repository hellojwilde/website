import { Link } from "gatsby";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Seo from "../components/Seo";

import * as RichTextStyles from "../components/RichText.module.css";
import Callout from "../components/Callout";
import { StaticImage } from "gatsby-plugin-image";
import {
  CheckIcon,
  NoSymbolIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";

const IndexPage = (props) => {
  return (
    <div>
      <Seo path="/" />
      <Header />
      <main>
        <section className="container mx-auto px-6 py-6 md:py-12 space-y-6 text-lg">
          <h2 className="text-4xl md:text-5xl font-bold">
            Have an awesome product,
            <br className="hidden md:inline" /> with{" "}
            <span className="bg-gradient-to-br from-[#0E55BF] to-[#A1177B] text-transparent bg-clip-text">
              brutal privacy challenges?
            </span>
          </h2>
          <div className={`${RichTextStyles.wrapper} mt-24`}>
            <p>
              You've received a letter from a regulator, a tough question from a
              customer, a risk flagged by legal counsel. Or you're building
              something groundbreaking, and want to get it right.
            </p>
            <p>
              You need a head of privacy engineering, <em>fast</em>. Somebody
              who:
            </p>
            <ul>
              <li>
                <strong>Solves "impossible" problems.</strong> Like wrangling
                200+ teams, migrating critical systems in weeks with no
                downtime, or building and driving adoption on infrastructure in
                days.
              </li>
              <li>
                <strong>Delivers low-friction solutions.</strong> Finds privacy
                solutions that ideally make teams <em>more</em> productive, not
                just slow them down with endless processes and checklists.
              </li>
              <li>
                <strong>Understands world governments.</strong> Has led
                technical solutions in response to agencies in the United
                States, Europe, and beyond — from the FTC to the United Nations.
              </li>
            </ul>
            <p>
              Good news —{" "}
              <strong>
                you've found the fractional head of privacy engineering you need
              </strong>
              .
            </p>
          </div>
          <div className="flex space-x-6 items-center mt-6">
            <Link
              className="text-xl text-white rounded-lg py-2.5 md:py-3.5 px-5 font-bold bg-gradient-to-br from-[#0E55BF] to-[#A1177B] text-center hover:brightness-75 active:brightness-50 transition-all"
              to="https://book.vimcal.com/p/jwilde/real-world-privacy"
            >
              Book Call
            </Link>
            <Link
              to="/page/services"
              className="text-xl text-slate-700 hover:text-slate-800 active:text-slate-900 hover:underline transition-colors"
            >
              Services
            </Link>
          </div>
        </section>

        <section className="mt-6">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold ">
              Meet your new fractional head of privacy engineering.
            </h2>
          </div>
          <Callout
            className="mt-6"
            innerClassName="flex flex-col p-6 md:flex-row md:space-x-6 items-center"
          >
            <StaticImage
              src="../../static/jwilde-headshot.jpg"
              className="max-w-[150px] md:max-w-[300px]"
              width={300}
              height={300}
              imgClassName="rounded-full"
            />

            <div className="flex flex-col justify-center mt-6 md:mt-0 text-center md:text-left">
              <h3 className="font-bold text-2xl">Jonathan Wilde</h3>
              <p className="text-slate-700">Owner &amp; Principal Consultant</p>

              <div className={`${RichTextStyles.wrapper} text-lg`}>
                <p>
                  I've led responses for some of the{" "}
                  <strong>riskiest and highest-profile privacy problems</strong>{" "}
                  in the world, at fast-moving companies small and large.
                </p>
                <p>
                  I can act as your in-house head of privacy engineering and
                  drive implementation until you're ready to hire a full-time
                  team. And I can help you hire that team, too.
                </p>
              </div>
              <p>
                <Link
                  to="https://www.linkedin.com/in/hellojwilde/"
                  className="text-base font-normal text-sky-700 hover:text-slate-800 active:text-slate-900  hover:underline transition-colors"
                >
                  <UserPlusIcon className="inline w-4 h-4" /> Connect on
                  LinkedIn
                </Link>
              </p>
            </div>
          </Callout>
        </section>

        <section className="container mx-auto mt-6 px-6 py-6 md:py-12 space-y-6 text-lg">
          <h2 className="text-3xl font-bold">
            Low-friction solutions for "impossible" problems.
          </h2>
          <p className="text-lg">
            My{" "}
            <Link
              to="https://www.privado.ai/data-privacy-stars/jonathan-wilde"
              className="text-sky-700 hover:text-slate-800 active:text-slate-900  hover:underline transition-colors"
            >
              award-winning approach
            </Link>{" "}
            is to work closely with your founders, engineers, and legal counsel
            to design engineering-friendly privacy safeguards —{" "}
            <strong>as automated as possible, with minimal busywork</strong>.
          </p>
          <table className="table-auto text-center w-full border-4 border-slate-300">
            <thead className="text-xl font-bold border-b-2">
              <tr>
                <th className="p-2">
                  <NoSymbolIcon className="inline w-5 h-5" /> The old approach
                </th>
                <th className="text-green-700 p-2">
                  <CheckIcon className="inline w-5 h-5" /> My approach
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Endless misalignment</td>
                <td className="p-2 text-green-700">Selling the problem</td>
              </tr>
              <tr>
                <td className="p-2">Endless uncertainty</td>
                <td className="p-2 text-green-700">Technical invariants</td>
              </tr>
              <tr>
                <td className="p-2">Endless forms</td>
                <td className="p-2 text-green-700">Code schematization</td>
              </tr>
              <tr>
                <td className="p-2">Endless checklists</td>
                <td className="p-2 text-green-700">Automated tests</td>
              </tr>
              <tr>
                <td className="p-2">Endless waiting</td>
                <td className="p-2 text-green-700">Self-service tools</td>
              </tr>
              <tr>
                <td className="p-2">Endless meetings</td>
                <td className="p-2 text-green-700">Async communication</td>
              </tr>
              <tr>
                <td className="p-2">Endless maintenance</td>
                <td className="p-2 text-green-700">Efficient vendors</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mt-6">
          <Callout innerClassName="p-6">
            <h2 className="text-center text-3xl font-bold">Get started now.</h2>
            <p className="text-center text-lg">
              Book your complimentary 30-minute discovery call.
            </p>
            <p className="text-center mt-4">
              <Link
                className="inline-block text-2xl text-white rounded-lg py-2.5 md:py-3.5 px-5 font-bold bg-gradient-to-br from-[#0E55BF] to-[#A1177B] text-center hover:brightness-75 active:brightness-50 transition-all"
                to="https://book.vimcal.com/p/jwilde/real-world-privacy"
              >
                Book Call
              </Link>
            </p>
            <p className="text-slate-700 text-center mt-2 text-sm">
              Limited spots remaining.
            </p>
          </Callout>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IndexPage;
