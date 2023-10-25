import React from 'react';
import Table from "../../components/shared/Table";
import TopBar from '../../components/shared/TopBar';
import LeftBar from '../../components/shared/LeftBar';
import RightBar from '../../components/shared/RightBar';
import BottomBar from '../../components/shared/BottomBar';


const dashboard = () => {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-semibold text-center mb-4">dashboard</h1>
          <TopBar />
  
          <main className="flex flex-row">
            <LeftBar />
            <section className="main-container">
              <Table />
            </section>
            {/* @ts-ignore */}
            <RightBar />
          </main>
  
          <BottomBar />
        </div>
      </div>
    );
  };
  export default dashboard;