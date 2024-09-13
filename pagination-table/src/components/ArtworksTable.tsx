import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useSearchParams, useNavigate } from 'react-router-dom';

const ArtworksTable: React.FC = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRecords, setTotalRecords] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const rows = 6;

  // Get the current page from the query params
  const currentPage = Number(searchParams.get('page')) || 1;

  const fetchArtworks = (pageNumber: number) => {
    setLoading(true);
    fetch(`https://api.artic.edu/api/v1/artworks?page=${pageNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setArtworks(data.data);
        setTotalRecords(data.pagination.total);
        console.log("------------>");
        console.log(data.pagination.total);
        console.log("------------>");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchArtworks(currentPage);
  }, [currentPage]);

  const onPageChange = (event: any) => {
    // const newPage = event.page + 1;
    // setSearchParams({ page: newPage.toString() });
    console.log(event);
    
  };

  return (
    <div className='artworks'>
      <h2>Artworks Table</h2>
      <DataTable value={artworks} loading={loading} paginator
        rows={rows} totalRecords={totalRecords}
        first={(currentPage - 1) * 10}
        onPage={onPageChange}>
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
