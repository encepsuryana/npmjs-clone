import React, { useState, useEffect } from "react";
import "./package-card.css";
import AvatarIcon from "../assets/images/avatar.png";

interface PackageCardProps {
  searchTerm: string;
  packageDetail: any;
  score: any;
  onPackageClick?: (selectedPackageName: string) => void;
}

const PackageCard: React.FC<PackageCardProps> = ({
  searchTerm,
  packageDetail,
  score,
  onPackageClick,
}) => {
  const [scoreData, setScoreData] = useState<any>(score?.detail);

  const calculateScore = (score: any) => {
    const { maintenance, quality, popularity } = score.detail;

    return {
      maintenance: +(maintenance * 100).toFixed(0),
      quality: +(quality * 100).toFixed(0),
      popularity: +(popularity * 100).toFixed(0),
    };
  };

  useEffect(() => {
    if (score) {
      setScoreData(calculateScore(score));
    }
  }, [score]);

  return (
    <div className="package-card">
      <div className="left">
        <div className="title">
          {packageDetail.name}
          {searchTerm === packageDetail.name && (
            <span className="exact-match">excat match</span>
          )}
        </div>
        <div className="description">{packageDetail.description}</div>
        {packageDetail.keywords && (
          <div className="key-words">
            {packageDetail.keywords.map((keyword: string, index: number) => (
              <div className="pill" key={keyword + index}>
                {keyword}
              </div>
            ))}
          </div>
        )}
        <div className="published">
          <img src={AvatarIcon} alt="avatar" />
          <span>{packageDetail.publisher.username}</span>
          <span>Published: {packageDetail.version}</span>
        </div>
      </div>
      <div>
        {scoreData && (
          <div>
            <div className="measure">
              <div>p</div>
              <div className="measure-bar">
                <div
                  className="p"
                  style={{ width: scoreData.popularity + "%" }}
                ></div>
              </div>
            </div>
            <div className="measure">
              <div>q</div>
              <div className="measure-bar">
                <div
                  className="q"
                  style={{ width: scoreData.quality + "%" }}
                ></div>
              </div>
            </div>
            <div className="measure">
              <div>m</div>
              <div className="measure-bar">
                <div
                  className="m"
                  style={{ width: scoreData.maintenance + "%" }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageCard;
