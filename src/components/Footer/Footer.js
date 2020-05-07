import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <Link to="" className="footer-link">
        利用規約
      </Link>
      <Link to="" className="footer-link">
        特定商取引法に基づく表示
      </Link>
      <Link to="" className="footer-link">
        使い方
      </Link>
    </div>
  );
};

export default Footer;
