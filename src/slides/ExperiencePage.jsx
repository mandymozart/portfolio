'use client';
import styled from '@emotion/styled';
import ExperienceList from '../components/Common/Experience/ExperienceList';
import ListHeader from '../components/Common/ListHeader/ListHeader';
import ClientList from '../components/Common/Partners/ClientList';
import SkillsList from '../components/Common/Skills/SkillsList';

const Container = styled.div``;

function ExperiencePage() {
  return (
    <Container>
      <ListHeader title='Experiences' />
      <ExperienceList />
      <ListHeader
        title='Skills'
        subtitle='I have experience with the following technologies'
      />
      <SkillsList />
      <ListHeader title='Clients' />
      <ClientList />
    </Container>
  );
}

export default ExperiencePage;
