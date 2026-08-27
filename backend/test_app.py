from app import app


def test_movies_endpoint_returns_200():
    client = app.test_client()
    response = client.get('/movies')
    assert response.status_code == 200


def test_movies_endpoint_returns_json():
    client = app.test_client()
    response = client.get('/movies')
    assert response.is_json


def test_movies_endpoint_returns_valid_data():
    client = app.test_client()
    response = client.get('/movies')
    data = response.get_json()
    assert 'movies' in data
    assert len(data['movies']) == 3
    assert data['movies'][0]['title'] == 'Top Gun: Maverick'
