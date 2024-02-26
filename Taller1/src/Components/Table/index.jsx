import React from "react"

export default function Table () {
    const data = [
        {name: 'Fernando Herrera', country: 'Uruguay', bio: 'Software Developer and CEO - DevTalles'},
        {name: 'Ada Lovelace', country: 'Great Bretain', bio: 'First Developer'},
        {name: 'Catalina ', country: 'Colombia', bio: 'Software Engineer'}
    ];

    return (
        <table className="table-auto w-full mt-10">
            <caption className="caption-buttom">Tabla 1. Listado de Developers</caption>
            <thead>
                <tr className="bg-violet-400 px-4 py-2">
                    <th className="px-2 py-4">Name</th>
                    <th className="px-2 py-4">Country</th>
                    <th className="px-2 py-4">Bio</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key = {row.id}>
                        <td className="border">{row.name}</td>
                        <td className="border">{row.country}</td>
                        <td className="border">{row.bio}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}