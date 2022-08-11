import { MyCardUi } from '@/components/MyCardUi';
import MyFilterSelect from '@/components/MyFilterSelect';
import MySearch from '@/components/MySearch';
import MySEO from '@/components/MySEO';
import api from '@/services/api';
import { Container } from '@/styles/GlobalStyles';
import { CardContainer, PaginateContainer, SearchContainer } from '@/styles/Home';
import textFormat from '@/utils/textFormat';
import type { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Pagination } from "react-pagination-bar"
import 'react-pagination-bar/dist/index.css'

interface Partners {
  id: string;
  fantasyName: string;
  cover: string;
  discountAmount: number;
}

interface PartnersProps {
  partners: Partners[];
}

const Home = ({partners}: PartnersProps): JSX.Element => {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 12;


  const router = useRouter();

   if (router.isFallback) {
    return <></>;
  }


  const dataFilter = (): Partners[] | [] => {
    if (selected === 'discountAmount') {
      // Filtra os parceiros com maior desconto e aplica a pesquisa.
      return partners.sort((a, b)=> (
        a.discountAmount > b.discountAmount ? -1 : 
        a.discountAmount < b.discountAmount ? 1 : 0
      )).filter(partner => textFormat(partner.fantasyName).includes(textFormat(search)));
    } else if (selected === '') {
      // Ordena em ordem alfabetica e aplica a pesquisa.
      return partners.sort((a, b)=> (
        textFormat(a.fantasyName) < textFormat(b.fantasyName) ? -1 : 
        textFormat(a.fantasyName) > textFormat(b.fantasyName) ? 1 : 0
      )).filter(partner => textFormat(partner.fantasyName).includes(textFormat(search)));
    }
    return [];
  };

  return (
    <>
    <MySEO title='Gazeta do povo - Hugo Mendonça' description='Teste front end'/>
      <SearchContainer>
        <MySearch placeholder='Buscar...' search={search} setSearch={setSearch} />
        <MyFilterSelect isActive={selected === 'discountAmount'} selected={selected} setSelected={setSelected} />
      </SearchContainer>
      <Container>
      <CardContainer>
        {dataFilter().slice(
          (currentPage - 1) * pagePostsLimit,
          (currentPage - 1) * pagePostsLimit + pagePostsLimit
        )
        .map((partner) => {
          return <MyCardUi key={partner.id} fantasyName={partner.fantasyName} cover={partner.cover} discountAmount={partner.discountAmount} />;
        })}
      </CardContainer>
      <PaginateContainer>
        <Pagination
          currentPage={currentPage}
          itemsPerPage={pagePostsLimit}
          onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
          totalItems={dataFilter().length}
          pageNeighbours={2}
          customClassNames={{rpbItemClassNameActive: 'active-item'}}
        />
      </PaginateContainer>
      </Container>
    </>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps<PartnersProps> = async () => {
  const response = await api.get('/api/repository/partners/all.json');

  return {
    props: {
      partners: response.data,
    },
  };
};
