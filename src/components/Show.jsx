import React from 'react'

const Show = (props) => {
    const { results, info } = props;
    return (
        <div className="show">
            <div className="show-info">
                {info ? `Total Results: ${info.totalResults}` : ''}
            </div>
            {results.length > 0 ? results.map(result => (
                <div className="show-details">
                    <div className="show-link">
                        <a href={result.displayLink} >{result.displayLink}</a>
                    </div>
                    <div className="show-title"> <a href={result.link} > {result.title}</a></div>
                    <div className="show-description">
                        <p>{result.snippet} </p>
                    </div>
                </div>
            )) : ''}
        </div>
    )
}

export default Show
