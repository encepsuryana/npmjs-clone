import React from "react";
import PackageCard from "../components/Package-Card";
import "./packages-results.css";

interface PackageResultProps {
  searchTerm: string;
  packages: any;
  totalFound: number;
  onPackageDetailClick: (selectedPackageName: string) => void;
}

const PackageResult: React.FC<PackageResultProps> = ({
  totalFound,
  searchTerm,
  packages,
  onPackageDetailClick,
}) => {
  return (
    <div className="packages-container">
      <div className="results-summary">
        <span>{totalFound} package found</span>
        <span>Scroll down for more</span>
      </div>

      <div className="results">
        <div>
          <p>Packages legend</p>
          <div className="sorters">
            <div>Optimal</div>
            <div>Popularity</div>
            <div>Quality</div>
            <div>Maintenance</div>
          </div>
        </div>
        <div className="results-list">
          {packages.map((packageItem: any) => (
            <PackageCard
              key={packageItem.package.name}
              searchTerm={searchTerm}
              packageDetail={packageItem.package}
              score={packageItem.score}
            />
          ))}

          {packages.length === 0 && (
            <div className="empty-results">
              Looks like no packages found. Try to change search term.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PackageResult;
