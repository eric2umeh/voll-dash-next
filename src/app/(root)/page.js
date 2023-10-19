'use client';

import Table from "../../components/shared/Table";

// import Table from '@/components/shared/Table';

export default function Home() {

  return (
    <>
      <h1>Home</h1>
      <Table />
      {/* <div className=" ">
        <Button icon={{ src: '/assets/filter.svg', alt: 'logout' }}>
          Filters
        </Button>

        <TextInput
          onChange={handleInputChange}
          iconImage={{ src: '/assets/search-lg.svg', alt: 'logout' }}
          placeholder="Enter something"
          width="w-64"
          height="h-12"
          name="inputField"
          type="text"
          required={true}
          disabled={false}
        />

        <Dropdown
          value={selectedOption}
          setValue={setSelectedOption}
          options={options}
          label="Dropdown Label:"
          colored
        />

        <Dropdown
          value={selectedOption}
          setValue={setSelectedOption}
          options={options1}
          label="Dropdown Label:"
        />

        <div className="flex flex-wrap gap-2">
          <Pill borderColor="border-green-1" textColor="text-green-2">
            Airtime
          </Pill>
          <Pill borderColor="border-pink-1" textColor="text-pink-2">
            Cable Tv
          </Pill>
          <Pill
            bgColor="bg-light-4"
            icon={{ src: '/assets/reverse-left.svg', alt: 'reverse' }}
          >
            Refunded
          </Pill>
          <Pill bgColor="bg-red-1" textColor="text-red-2">
            Open
          </Pill>
          <Pill
            borderColor="border-green-1"
            textColor="text-green-2"
            icon={{ src: '/assets/success.svg', alt: 'success' }}
          >
            Yes
          </Pill>
        </div>

        <ToggleSwitch checked={isChecked} onChange={handleToggle} />

        <div className="grid grid-cols-3 gap-4">
          <StatisticsCard
            icon={{ src: '/assets/active-user.svg', alt: 'logout' }}
            name="Total Message"
            value={'59,000'}
          />
          <StatisticsCard
            icon={{ src: '/assets/withdrawal.svg', alt: 'logout' }}
            name="Unread"
            value="45,000"
          />
          <StatisticsCard
            icon={{ src: '/assets/deposit.svg', alt: 'logout' }}
            name="Read"
            value="14,000"
          />
        </div>
      </div> */}
    </>
  );
}
