import React from "react";
import { useState } from "react";
import { FaPlus, FaChevronUp } from "react-icons/fa";
import { CgProfile, } from "react-icons/cg";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";

function AccountOpening() {
  const [isOpen, setIsOpen] = useState(true);

  const accountList = [
    "Resident Individual",
    "Minor",
    "Non Resident Indian (NRI)",
    "Company, Partnership, HUF and LLP",
    "Glossary",
  ];

  return (
    <div className=" zoom-item card border-0 shadow-sm mt-4 mx-5">
      {/* Header */}
      <div
        className="d-flex justify-content-between align-items-center p-3 border"
        style={{ cursor: "pointer" , }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex align-items-center gap-3">
          <FaPlus size={20} color="#387ed1" />
          <h4 className="mb-0">Account Opening</h4>
        </div>

        <FaChevronUp
          size={18}
          style={{
            transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
            transition: "0.3s",
          }}
        />
      </div>

      {/* Dropdown List */}

      {isOpen && (
        <div className="p-4">
          <ul>
            {accountList.map((item, index) => (
              <li key={index} className="mb-3">
                <a href="/" className="text-decoration-none">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function ZerodhaAccount() {
  const [isOpen, setIsOpen] = useState(true);

  const accountList = [
    "Your Profile",
    "Account modification",
    "Client Master Report (CMR) and Depository Participant (DP)",
    "Nomination",
    "Transfer and conversion of securities",
  ];

  return (
    <div className="zoom-item card border-0 shadow-sm mt-4 mx-5">
      {/* Header */}
      <div
        className="d-flex justify-content-between align-items-center p-3 border"
        style={{ cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex align-items-center gap-3">
          <CgProfile size={20} color="#387ed1" />
          <h4 className="mb-0">Your Zerodha Account</h4>
        </div>

        <FaChevronUp
          size={18}
          style={{
            transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
            transition: "0.3s",
          }}
        />
      </div>

      {/* Dropdown List */}

      {isOpen && (
        <div className="p-4">
          <ul>
            {accountList.map((item, index) => (
              <li key={index} className="mb-3">
                <a href="/" className="text-decoration-none">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Kite() {
  const [isOpen, setIsOpen] = useState(true);

  const accountList = [
    "IPO",
"Trading FAQs",
"Margin Trading Facility (MTF) and Margins",
"Charts and orders",
"Alerts and Nudges",
"General",
  ];

  return (
    <div className="zoom-item card border-0 shadow-sm mt-4 mx-5">
      {/* Header */}
      <div
        className="d-flex justify-content-between align-items-center p-3 border"
        style={{ cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex align-items-center gap-3">
          <FaPlus size={20} color="#387ed1" />
          <h4 className="mb-0">Kite</h4>
        </div>

        <FaChevronUp
          size={18}
          style={{
            transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
            transition: "0.3s",
          }}
        />
      </div>

      {/* Dropdown List */}

      {isOpen && (
        <div className="p-4">
          <ul>
            {accountList.map((item, index) => (
              <li key={index} className="mb-3">
                <a href="/" className="text-decoration-none">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Funds() {
  const [isOpen, setIsOpen] = useState(true);

  const accountList = [
    "Add money",
"Withdraw money",
"Add bank accounts",
"eMandates"
  ];

  return (
    <div className="zoom-item card border-0 shadow-sm mt-4 mx-5">
      {/* Header */}
      <div
        className="d-flex justify-content-between align-items-center p-3 border"
        style={{ cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex align-items-center gap-3">
          <RiMoneyRupeeCircleLine size={20} color="#387ed1" />
          <h4 className="mb-0">Funds</h4>
        </div>

        <FaChevronUp
          size={18}
          style={{
            transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
            transition: "0.3s",
          }}
        />
      </div>

      {/* Dropdown List */}

      {isOpen && (
        <div className="p-4">
          <ul>
            {accountList.map((item, index) => (
              <li key={index} className="mb-3">
                <a href="/" className="text-decoration-none">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Console() {
  const [isOpen, setIsOpen] = useState(true);

  const accountList = [
   "Portfolio",
"Corporate actions",
"Funds statement",
"Reports",
"Profile",
"Segments"

  ];

  return (
    <div className="zoom-item card border-0 shadow-sm mt-4 mx-5">
      {/* Header */}
      <div
        className="d-flex justify-content-between align-items-center p-3 border"
        style={{ cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex align-items-center gap-3">
          <FaPlus size={20} color="#387ed1" />
          <h4 className="mb-0">Console</h4>
        </div>

        <FaChevronUp
          size={18}
          style={{
            transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
            transition: "0.3s",
          }}
        />
      </div>

      {/* Dropdown List */}

      {isOpen && (
        <div className="p-4">
          <ul>
            {accountList.map((item, index) => (
              <li key={index} className="mb-3">
                <a href="/" className="text-decoration-none">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Coin() {
  const [isOpen, setIsOpen] = useState(true);

  const accountList = [
    "Mutual funds",
"National Pension Scheme (NPS)",
"Fixed Deposit (FD)",
"Features on Coin",
"Payments and Orders",
"General"

  ];

  return (
    <div className="zoom-item card border-0 shadow-sm mt-4 mx-5 ">
      {/* Header */}
      <div
        className="d-flex justify-content-between align-items-center p-3 border"
        style={{ cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex align-items-center gap-3">
          <FaPlus size={20} color="#387ed1" />
          <h4 className="mb-0">Coin</h4>
        </div>

        <FaChevronUp
          size={18}
          style={{
            transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
            transition: "0.3s",
          }}
        />
      </div>

      {/* Dropdown List */}

      {isOpen && (
        <div className="p-4">
          <ul>
            {accountList.map((item, index) => (
              <li key={index} className="mb-3">
                <a href="/" className="text-decoration-none">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export { AccountOpening, ZerodhaAccount, Kite, Funds, Console, Coin };
