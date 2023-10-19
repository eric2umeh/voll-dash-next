import Image from 'next/image';
import Link from 'next/link';
import Searchbar from './SearchBar';
import TextInput from '../ui/TextInput';

function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading4-medium text-dark-1 max-xs:hidden md:ml-8">
          Volla
        </p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block">
          <div className="flex gap-4 cursor-pointer md:hidden">
            <TextInput
              // onChange={handleInputChange}
              iconImage={{ src: '/assets/search-lg.svg', alt: 'logout' }}
              placeholder="Enter something"
              width="w-54"
              height="h-10"
              name="inputField"
              type="text"
              required={true}
              disabled={false}
            />
            <Image
              src="/assets/settings.svg"
              alt="setting"
              width={24}
              height={24}
            />
            <Image
              src="/assets/logout.svg"
              alt="logout"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
