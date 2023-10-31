describe('API Tests for Restful Booker', () => {
  const baseUrl = 'https://restful-booker.herokuapp.com';

  it('Health Check Test', () => {
    cy.request(`${baseUrl}/ping`).then((response) => {
      expect(response.status).to.equal(200); 
      expect(response.body).to.have.property('status', 'up');
    });
  });

  it('Create Booking Test', () => {
    const newBookingData = {
      first_name: 'John',
      last_name: 'Doe',
      check_in: '2023-10-01',
      checkout: '2023-10-10',

    };
    cy.request('POST', `${baseUrl}/booking`, newBookingData).then((response) => {
      expect(response.status).to.equal(200); 
    });
  });

  it('Update Booking Test', () => {
    const bookingId = '455'; 
    const updatedBookingData = {
      first_name: 'UpdatedName',
    };
    cy.request('PUT', `${baseUrl}/booking/${bookingId}`, updatedBookingData).then((response) => {
      expect(response.status).to.equal(200); 
    });
  });

  it('Get Booking Details Test', () => {

    const bookingId = '455'; 
    cy.request(`${baseUrl}/booking/${bookingId}`).then((response) => {
      expect(response.status).to.equal(200); 
    });
  });

  it('Delete Booking Test', () => {
    const bookingId = '455'; 
    cy.request('DELETE', `${baseUrl}/booking/${bookingId}`).then((response) => {
      expect(response.status).to.equal(200); 
    });
  });
});
