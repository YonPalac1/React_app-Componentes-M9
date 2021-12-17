import React from 'react';
import TableRow from './TableRow';

let tableRowsData = [
    {
        Title: 'Billy Elliot ',
        Length: '123',
        Rating: '5',
        Awards: 2,
        Categories: ['Drama','Comedia'],
    },
    {
        Title: 'Alicia en el país de las maravillas',
        Length: '142',
        Rating: '4.8',
        Awards: 3,
        Categories: ['Drama','Acción','Comedia'],
    },
    
]


function Chart (){
    return (
        <div className="col-12 mx-auto shadow p-2 mb-4">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Duración</th>
                                <th>Rating</th>
                                <th>Género</th>
                                <th>Premios</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Título</th>
                                <th>Duración</th>
                                <th>Rating</th>
                                <th>Género</th>
                                <th>Premios</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <TableRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
        </div>

    )
}

export default Chart;