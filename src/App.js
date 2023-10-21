import React, { useState, useEffect } from 'react';
import './App.css';

const ARTICLES = [
    // Your article data...
];

function App({ articles }) {


    return (
        <div className="App">
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button className="small" onClick={handleUpvoted}>
                    Most Upvoted
                </button>
                <button className="small" onClick={handleRecent}>
                    Most Recent
                </button>
            </div>

            <table className="table">
                <thead style={{ color: 'black', fontSize: '25px' }}>
                    <tr>
                        <th>title</th>
                        <th>upvotes</th>
                        <th>date</th>
                    </tr>
                </thead>
                <tbody>
                    {upvoted.length > 0 ? (
                        upvoted.map((e, i) => (
                            <tr key={i}>
                                <td>{e.title}</td>
                                <td>{e.upvotes}</td>
                                <td>{e.date}</td>
                            </tr>
                        ))
                    ) : (
                        // Display recent articles when upvoted is empty
                        recent.map((e, i) => (
                            <tr key={i}>
                                <td>{e.title}</td>
                                <td>{e.upvotes}</td>
                                <td>{e.date}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default App;
