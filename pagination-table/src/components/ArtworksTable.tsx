import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const ArtworksTable: React.FC = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.artic.edu/api/v1/artworks?page=1')
      .then((response) => response.json())
      .then((data) => {
        setArtworks(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className='artworks'>
      <h2>Artworks Table</h2>
      <DataTable value={artworks} loading={loading}>
        <Column field="title" header="Title" />
        <Column field="place_of_origin" header="Place of Origin" />
        <Column field="artist_display" header="Artist" />
        <Column field="inscriptions" header="Inscriptions" />
        <Column field="date_start" header="Date Start" />
        <Column field="date_end" header="Date End" />
      </DataTable>
    </div>
  );
};

export default ArtworksTable;
