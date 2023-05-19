
const Blogs = () => {
    return (
        <div className='mt-8 w-[90%] mx-auto'>
            

            
            <div className='my-5 py-10' >
                <h1 className='text-2xl'>Q1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <div className=' my-5 bg-slate-100 p-5 rounded text-xl space-y-5'>
                    <p>
                        <span className='font-bold'>Access Token: </span>

                        An access token is a credential that is issued to a user by an authentication 
                        server upon successful authentication. It is a string of characters that 
                        represents the user  authorization to access specific resources or perform 
                        certain actions. The access token is usually short-lived and has an expiration
                         time associated with it. It is typically included in the headers or parameters
                          of API requests to prove the user identity and permissions.

                    </p>
                    <p>
                    <span className='font-bold'>Refresh Token: </span>
                    A refresh token is also issued by the authentication server during the 
                    initial authentication process. Unlike the access token, the refresh token 
                    is long-lived and has a longer expiration time. Its purpose is to obtain a 
                    new access token without requiring the user to re-authenticate. When the access 
                    token expires, the client can use the refresh token to request a new access token
                     from the authentication server, which helps to maintain a seamless user experience
                      without frequent login prompts.
                    </p>


                </div>
                <h1 className='text-2xl'>Q2.Compare SQL and NoSQL databases?</h1>
                <div className='my-5 bg-slate-100 p-5 rounded text-xl'>
                    <p>
                        <span className='font-bold'>SQL : </span>
                        
                        Sql is the structured query language. sql is a good choice when working with 
                        related data.
                    </p>
                    <p>
                    <span className='font-bold'>NoSQL : </span>
                    NoSql  database has a dynamic schema for unstructured data.NoSQL can ultimately become larger and
                     more powerful, making these databases the preferred choice for large or ever-changing data sets.
                    </p>
                </div>


                <h1 className='text-2xl'> Q3. What is express js? What is Nest JS ?</h1>
                <div className='my-5 bg-slate-100 p-5 rounded text-xl'>
                    <p>
                        <span className='font-bold'>Express js : </span>
                        Express.js is a popular open-source web application framework for
                         Node.js.Express.js is a powerful and versatile web application framework for Node.js

                        <span className='font-bold'>Nest js: </span>

                        NestJS is a popular open-source, server-side framework for building scalable
                        and maintainable web applications using Node.js. It is inspired by Angular,
                        which is a TypeScript-based frontend framework, and adopts many of its concepts
                        and design patterns

                    </p>
                </div>

                <h1 className='text-2xl'>Q4. What is MongoDB aggregate and how does it work?</h1>
                <div className='my-5 bg-slate-100 p-5 rounded text-xl'>
                    <p>
                        <span className='font-bold'>MongoDB Aggregate: </span>
                        MongoDB aggregation refers to the process of performing data analysis operations on
                         MongoDB collections. It allows you to process and transform data within MongoDB to 
                         extract valuable insights, perform calculations, and generate aggregated results.
                         --some key component that have related on mongodb aggregation:
                         1. Collection 2.Aggregation Pipeline 3.Stages  $group, $sort, $project, $limit, and $lookup
                         4. Operators  $group, $project, $sort, $sum, $avg, and $lookup
                         5. Aggregation Functions, $avg, $min, $max, $count, $addToSet



                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;