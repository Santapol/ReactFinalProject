import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2015 - 2018'} 
                        title={'Parttime Job'}
                        subTitle={'Parttime Job'}
                        text={'In the past, I worked a lot of part-time jobs in order to have money to hang out with friends and save money so that I could go on to study and buy things. '} 
                    />
                    <ResumeItem 
                        year={'2020 - 2021'} 
                        title={'Graphic design'}
                        subTitle={'Graphic design'}
                        text={'When I was in college and I gained some knowledge of graphics making, I hired graphic designers such as logos and restaurant logos and made various graphics in order to save money. '} 
                    />
                    <ResumeItem 
                        year={'2021 - 2022'} 
                        title={'Digital Marketting'}
                        subTitle={'Google Inc'}
                        text={'After I worked, I started to have some savings, I felt like having my own business, so I started investing in online business and making sales with my own graphics. '} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2012 - 2015'} 
                        title={'College Samutprakarn'}
                        subTitle={'Assumption College Samutprakarn'}
                        text={'Assumption College Samutprakarn is a private Catholic school in Samut Prakan Province, Thailand. The school was founded and run by the Brothers of St '} 
                    />
                    <ResumeItem 
                        year={'2015 - 2018'} 
                        title={'Commercial College'}
                        subTitle={'Bangna Commercial College'}
                        text={'Bangna College of Commerce opened for teaching in the field of commerce, established on May 22, 1970, when it was established under the name "Bangna Commercial School" under the Department of Vocational Education By Mr. Bunnag-Khun Suthep Rungsang,  '} 
                    />
                    <ResumeItem 
                        year={'2018 - 2022'} 
                        title={'High School University'}
                        subTitle={'Thai-Nichi Institute of Technology'}
                        text={' is an industry-oriented private college located in Bangkok, Thailand. The college was established in 2006 by the Technology Promotion Association (Thailand-Japan). It was founded with the cooperation of Thai and Japanese organizations. '} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
