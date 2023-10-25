import React from 'react';
import Table from "../../components/shared/Table";
import TopBar from '../../components/shared/TopBar';
import LeftBar from '../../components/shared/LeftBar';
import RightBar from '../../components/shared/RightBar';
import BottomBar from '../../components/shared/BottomBar';

const dashboard = () => {
    return (
        <div className="min-h-screen flex flex-col">
          <TopBar />
          <div className="flex flex-grow">
            <LeftBar className="w-1/5" /> 
            <Table className="w-3/5" /> 
            <RightBar className="w-[350px]" />
          </div>
          <BottomBar />
        </div>
      );
};

  export default dashboard;