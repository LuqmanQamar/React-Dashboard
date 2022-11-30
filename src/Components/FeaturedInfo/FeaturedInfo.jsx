import React from 'react'
import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
export default function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,345</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward className='featuredIcon negative' />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>

            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$5,110</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward className='featuredIcon negative' />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>

            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,502</span>
                    <span className="featuredMoneyRate">
                        9.3 <ArrowUpward className='featuredIcon' />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>

            </div>
        </div>
    )
}
