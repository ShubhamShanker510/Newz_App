import React from 'react'

const Newsitem=(props)=> {

   


        let { title, description,imageUrl, newsUrl, author,date } =props;
    return (
            <>
            <div className="card my-3" style={{ width: "18rem"}}>
        <img src={!imageUrl?"https://static.toiimg.com/thumb/msid-99548581,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-2001789/99548581.jpg":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className='card-text'><small className='text-muted'>By {!author?"unkowwn":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
        </div>
        </div>
            </>
    )

}

export default Newsitem
