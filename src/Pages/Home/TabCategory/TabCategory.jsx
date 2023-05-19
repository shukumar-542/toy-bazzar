import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabToy from './TabToy';

const TabCategory = () => {
    const [activeTab, setActiveTab] = useState("learning toys ");
    const [toys, setToys] = useState([])
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    }
    // console.log(toys);
    useEffect(() => {
        fetch(`https://toy-bazar-server-mauve.vercel.app/toys/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [activeTab])
    // console.log(activeTab);
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <Tabs>
                <TabList>
                    <Tab onClick={() => handleTabClick('learning toys')}>learning toys</Tab>
                    <Tab onClick={() => handleTabClick('Math Toys')}>Math Toys</Tab>
                    <Tab onClick={() => handleTabClick('engineering Toys')}>engineering Toys</Tab>
                </TabList>

                <TabPanel>
                   <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                   {
                        toys.map(toy=><TabToy
                        key={toy._id}
                        toy={toy}
                        ></TabToy>)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                    {
                        toys.map(toy=><TabToy
                        key={toy._id}
                        toy={toy}
                        ></TabToy>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                        toys.map(toy=><TabToy
                        key={toy._id}
                        toy={toy}
                        ></TabToy>)
                    }
                </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabCategory;