import React from 'react';
import './container.css';
import girl from './girl.jpg';

export default ({toggleChat}) => (
    <main className="main">
        <div className="intro">
            <div className="shell">
                <div className="intro__outer">
                    <div className="intro__inner">
                        <figure className="intro__image" style={{backgroundImage: `url(${girl})`}}>
                        </figure>

                        <div className="intro__content">
                            <h1 className="intro__title">
                                One-Stop Solution for all your pregnancy related problems
								</h1>

                            <div className="intro__entry">
                                <p>
                                    So it's time to embrace Motherhood.Let's chat.
									</p>
                            </div>

                            <div className="intro__actions">
                                <a  className="btn"
                                onClick={toggleChat}
                                >
                                    Let's chat
									</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
)
