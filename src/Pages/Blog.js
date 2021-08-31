import React, { useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import axios from 'axios';
import BlogItems from '../components/BlogItems';
import BlogInfo from '../assets/data/BlogData';

export default function Blog() {
  const [searchText, setSearchText] = useState('');
  const [BlogsData, setBlogsData] = useState(BlogInfo);
  useEffect(() => {
    if (searchText === '') return;
    setBlogsData(() =>
      BlogInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setBlogsData(BlogInfo);
    }
  };

  return (
    <div>
      <div className="Blog__searchbar">
        <form>
          <input
            type="text"
            value={searchText}
            onChange={handleChange}
            placeholder="Project Name"
          />
          <MdSearch />
        </form>
      </div>
      <div className="Blog__allIteams">
        {BlogsData.map((item) => (
          <BlogItems
            key={item.id}
            title={item.name}
            desc={item.desc}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}
