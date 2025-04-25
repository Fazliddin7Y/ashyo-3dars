'use client';

import React, { useState } from 'react';
import {
  FaSearch,
  FaBalanceScale,
  FaHeart,
  FaShoppingBag,
  FaBoxOpen,
  FaMapMarkerAlt,
  FaChevronDown,
} from 'react-icons/fa';
import { useTranslations, NextIntlClientProvider } from 'next-intl';

import uz from '../../locales/uz.json';
import en from '../../locales/en.json';

const InnerHeader: React.FC = () => {
  const t = useTranslations();

  return (
    <header className="font-sans w-full">
      {/* top navbar */}
      <div className="bg-gray-100 text-sm px-10 py-2 flex justify-between items-center">
        <div className="flex items-center text-gray-600 gap-1">
          <FaMapMarkerAlt />
          <span>{t('location')}</span>
        </div>
        <nav className="flex gap-6 text-gray-600">
          <a href="#">{t('aboutUs')}</a>
          <a href="#">{t('products')}</a>
          <a href="#">{t('contacts')}</a>
        </nav>
        <div className="flex items-center gap-4 text-gray-600">
          <span>+998 (71) 123-45-67</span>
          {/* til tanlash select */}
          <select
            className="bg-transparent outline-none cursor-pointer"
            onChange={(e) => {
              if (typeof window !== 'undefined') {
                window.localStorage.setItem('locale', e.target.value);
                window.location.reload(); // sahifani reload qiladi
              }
            }}
            defaultValue={typeof window !== 'undefined' ? localStorage.getItem('locale') || 'uz' : 'uz'}
          >
            <option value="uz">Uz</option>
            <option value="en">En</option>
          </select>
        </div>
      </div>

      {/* header */}
      <div className="bg-white px-10 py-4 flex justify-between items-center">
        <div className="flex items-center text-blue-700 text-3xl font-bold gap-2">
          <img src="./logo.svg" alt="Ashyo logo" className="w-12 h-12" />
          <span>Ashyo</span>
        </div>

        <div className="flex flex-grow max-w-2xl mx-10">
          <button className="bg-blue-700 text-white px-4 py-2 rounded-l-md flex items-center gap-2">
            {t('categories')} <FaChevronDown className="text-xs" />
          </button>
          <input
            type="text"
            placeholder={t('searchPlaceholder')}
            className="flex-grow px-4 py-2 bg-gray-100 outline-none"
          />
          <button className="bg-blue-700 text-white px-4 py-2 rounded-r-md">
            <FaSearch />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative bg-gray-100 p-2 rounded-md">
            <FaBalanceScale className="text-xl" />
            <span className="absolute -top-1 -right-1 text-xs bg-red-600 text-white px-1 rounded-full">2</span>
          </div>
          <div className="relative bg-gray-100 p-2 rounded-md">
            <FaHeart className="text-xl" />
            <span className="absolute -top-1 -right-1 text-xs bg-red-600 text-white px-1 rounded-full">11</span>
          </div>
          <div className="relative bg-gray-100 p-2 rounded-md">
            <FaShoppingBag className="text-xl" />
            <span className="absolute -top-1 -right-1 text-xs bg-red-600 text-white px-1 rounded-full">7</span>
          </div>
          <div className="bg-gray-100 p-2 rounded-md">
            <FaBoxOpen className="text-xl" />
          </div>
        </div>
      </div>

      {/* bottom menu */}
      <nav className="bg-white flex justify-center gap-6 text-gray-700 text-sm py-3 border-t">
        <a href="#">{t('laptop')}</a>
        <a href="#">{t('ac')}</a>
        <a href="#">{t('macbook')}</a>
        <a href="#">{t('smartphone')}</a>
        <a href="#">{t('fridge')}</a>
        <a href="#">{t('washer')}</a>
        <a href="#">{t('tv')}</a>
        <a href="#">{t('lenovo')}</a>
        <a href="#">{t('vacuum')}</a>
      </nav>
    </header>
  );
};

const Header = () => {
  let locale = 'uz';

  if (typeof window !== 'undefined') {
    locale = localStorage.getItem('locale') || 'uz';
  }

  const messages = locale === 'uz' ? uz : en;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <InnerHeader />
    </NextIntlClientProvider>
  );
};

export default Header;
