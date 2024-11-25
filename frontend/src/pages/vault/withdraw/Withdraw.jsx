import React from 'react';
import './withdraw.css';
import { ReactComponent as DiamondIcon } from 'assets/icons/diamond.svg';
import { ReactComponent as TimeIcon } from 'assets/icons/time.svg';
import { ReactComponent as SettingIcon } from 'assets/icons/settings.svg';

export default function Withdraw() {
  return (
    <div className="withdraw-wrapper">
      <div className="withdraw-container">
        <div className="main-container">
          <div className="top-cards">
            <div className="withdraw-card">
              <div className="card-header">
                <span className="label">Total Amount staked</span>
              </div>
              <div className="card-value">
                <span className="top-card-value">324,909,894</span>
              </div>
            </div>

            <div className="withdraw-card">
              <div className="card-header">
                <span className="label">Daily Boost Multiplier</span>
              </div>
              <div className="card-value">
                <span className="top-card-value">0.5%</span>
              </div>
            </div>
          </div>
        </div>
        <h1 className="withdraw-title">Staking withdrawal</h1>
        <div className="main-card">
          <div className="amount-stack-card">
            <div className="amount-stack-card-title-container">
              <div className="card-header">
                <DiamondIcon className="card-icon" />
                <span className="label">Your Stack</span>
              </div>
              <div className="card-value">
                <span className="top-card-value">13.89</span>
              </div>
            </div>
            <div className="amount-stack-card-title-container">
              <div className="card-header">
                <TimeIcon className="card-icon" />
                <span className="label">Your Boost</span>
              </div>
              <div className="card-value">
                <span className="top-card-value">132.43%</span>
              </div>
            </div>
          </div>
          <div className="withdraw-input-container">
            <div className="withdraw-input-title">Input Amount</div>
            <input type="text" className="withdraw-input" placeholder="Enter Amount to Withdraw" />
          </div>
          <div className="main-card-footer">
            <div className="divider"></div>
            <div className="settings-fee-container">
              <div className="setting-circle">
                <SettingIcon className="setting-icon" />
              </div>
              <div className="fee-title">Gas fee: 0.00 STRK</div>
            </div>
          </div>
        </div>

        <button className="withdraw-button">Withdraw</button>
      </div>
    </div>
  );
}
