import React from "react";

//import logo
import LogoIcon from "../assets/images/npm.svg";
import searchIcon from "../assets/images/search.png";
import closeIcon from "../assets/images/close.png";

//import Action
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

//import components
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import PackageResult from "./PackagesResults";

const NpmPackageSearcher: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [searchFocused, setSearchFocused] = React.useState<boolean>(false);
  const [selectedPackageName, setSelectedPackageName] =
    React.useState<string>("");
  const [showPackageDetail, setShowPackageDetail] =
    React.useState<boolean>(false);

  const { searchNpmPackages } = useActions();
  //intellisense coming from out root state
  const { packages, loading, error } = useTypedSelector(
    (state) => state.packageReducer
  );

  const onSearchFocus = (): void => {
    setSearchFocused(true);
  };
  const onSearchBlur = (): void => {
    setSearchFocused(false);
  };
  const onClear = (): void => {
    setSearchTerm("");
  };

  const onSubmit = (): void => {
    searchNpmPackages(searchTerm);
  };

  const onPackageDetailClick = (selectedPackageName: string): void => {
    setShowPackageDetail(true);
    setSelectedPackageName(selectedPackageName);
  };

  return (
    <div className="npm-package-searcher">
      <div className="search-container">
        <div>
          <img src={LogoIcon} alt="npm-logo" />
        </div>
        <div className={searchFocused ? "active-search" : "inactive-search"}>
          <img src={searchIcon} alt="search-icon" />

          <input
            onFocus={onSearchFocus}
            onBlur={onSearchBlur}
            value={searchTerm}
            onChange={(e): void => setSearchTerm(e.target.value)}
            placeholder="Search for a package"
            type="text"
          />

          {searchTerm.length > 0 && (
            <img
              src={closeIcon}
              alt="close-icon"
              className="close-icon"
              onClick={onClear}
            />
          )}

          <button onClick={onSubmit}>Search</button>
        </div>
      </div>

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {!loading && !error && !packages.results && !showPackageDetail && (
        <div className="start-searching">Start your search for NPM package</div>
      )}

      {!loading &&
        !error &&
        packages &&
        packages.results &&
        !showPackageDetail && (
          <PackageResult
            searchTerm={searchTerm}
            packages={packages.results}
            totalFound={packages.total}
            onPackageDetailClick={onPackageDetailClick}
          />
        )}

      {!loading && !error && selectedPackageName && showPackageDetail && (
        <div>show package detail</div>
      )}
    </div>
  );
};

export default NpmPackageSearcher;
