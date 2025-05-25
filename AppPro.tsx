// App.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  Alert,
  Dimensions,
} from 'react-native';
import {styles} from './styles/styles';
//import Login from './login/Login';
const {width} = Dimensions.get('window');

interface Artist {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  price: number;
  location: string;
  bio: string;
  image: string;
  services: string[];
  reviews: Review[];
}

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

const mockArtists: Artist[] = [
  {
    id: 1,
    name: 'Emma Styles',
    specialty: 'Bridal Makeup',
    rating: 4.8,
    price: 75,
    location: 'New York',
    bio: 'Professional makeup artist with 8 years of experience specializing in bridal makeup.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    services: ['Bridal Makeup', 'Editorial', 'Special Occasion'],
    reviews: [
      {
        id: 1,
        author: 'Sarah Johnson',
        rating: 5,
        comment: 'Emma did an amazing job on my wedding day!',
        date: '2023-05-15',
      },
      {
        id: 2,
        author: 'Michaela Smith',
        rating: 4,
        comment: 'Great experience, would book again!',
        date: '2023-04-10',
      },
    ],
  },
  {
    id: 2,
    name: 'Jasmine Lee',
    specialty: 'Editorial Makeup',
    rating: 4.9,
    price: 90,
    location: 'Los Angeles',
    bio: 'Fashion and editorial makeup artist working with top models and magazines.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    services: ['Editorial', 'Runway', 'Photoshoot'],
    reviews: [
      {
        id: 1,
        author: 'Alex Wong',
        rating: 5,
        comment: 'Jasmine transformed my look for the photoshoot!',
        date: '2023-06-20',
      },
    ],
  },
  {
    id: 3,
    name: 'Jasmine Lee',
    specialty: 'Editorial Makeup',
    rating: 4.9,
    price: 90,
    location: 'Los Angeles',
    bio: 'Fashion and editorial makeup artist working with top models and magazines.',
    image: 'https://randomuser.me/api/portraits/women/69.jpg',
    services: ['Editorial', 'Runway', 'Photoshoot'],
    reviews: [
      {
        id: 1,
        author: 'Alex Wong',
        rating: 5,
        comment: 'Jasmine transformed my look for the photoshoot!',
        date: '2023-06-20',
      },
    ],
  },
  {
    id: 4,
    name: 'Jasmine Lee',
    specialty: 'Editorial Makeup',
    rating: 4.9,
    price: 90,
    location: 'Los Angeles',
    bio: 'Fashion and editorial makeup artist working with top models and magazines.',
    image: 'https://randomuser.me/api/portraits/women/89.jpg',
    services: ['Editorial', 'Runway', 'Photoshoot'],
    reviews: [
      {
        id: 1,
        author: 'Alex Wong',
        rating: 5,
        comment: 'Jasmine transformed my look for the photoshoot!',
        date: '2023-06-20',
      },
    ],
  },
  {
    id: 5,
    name: 'Jasmine Lee',
    specialty: 'Editorial Makeup',
    rating: 4.9,
    price: 90,
    location: 'Los Angeles',
    bio: 'Fashion and editorial makeup artist working with top models and magazines.',
    image: 'https://randomuser.me/api/portraits/women/26.jpg',
    services: ['Editorial', 'Runway', 'Photoshoot'],
    reviews: [
      {
        id: 1,
        author: 'Alex Wong',
        rating: 5,
        comment: 'Jasmine transformed my look for the photoshoot!',
        date: '2023-06-20',
      },
    ],
  },
  {
    id: 6,
    name: 'Jasmine Lee',
    specialty: 'Editorial Makeup',
    rating: 4.9,
    price: 90,
    location: 'Los Angeles',
    bio: 'Fashion and editorial makeup artist working with top models and magazines.',
    image: 'https://randomuser.me/api/portraits/women/99.jpg',
    services: ['Editorial', 'Runway', 'Photoshoot'],
    reviews: [
      {
        id: 1,
        author: 'Alex Wong',
        rating: 5,
        comment: 'Jasmine transformed my look for the photoshoot!',
        date: '2023-06-20',
      },
    ],
  },
  {
    id: 7,
    name: 'Jasmine Lee',
    specialty: 'Editorial Makeup',
    rating: 4.9,
    price: 90,
    location: 'Los Angeles',
    bio: 'Fashion and editorial makeup artist working with top models and magazines.',
    image: 'https://randomuser.me/api/portraits/women/36.jpg',
    services: ['Editorial', 'Runway', 'Photoshoot'],
    reviews: [
      {
        id: 1,
        author: 'Alex Wong',
        rating: 5,
        comment: 'Jasmine transformed my look for the photoshoot!',
        date: '2023-06-20',
      },
    ],
  },
  {
    id: 8,
    name: 'Jasmine Lee',
    specialty: 'Editorial Makeup',
    rating: 4.9,
    price: 90,
    location: 'Los Angeles',
    bio: 'Fashion and editorial makeup artist working with top models and magazines.',
    image: 'https://randomuser.me/api/portraits/women/100.jpg',
    services: ['Editorial', 'Runway', 'Photoshoot'],
    reviews: [
      {
        id: 1,
        author: 'Alex Wong',
        rating: 5,
        comment: 'Jasmine transformed my look for the photoshoot!',
        date: '2023-06-20',
      },
    ],
  },
];

const AppPro = () => {
  // const [activeScreen, setActiveScreen] = useState<
  //   'login' | 'client' | 'artist'
  // >('login');
  // const [searchTerm, setSearchTerm] = useState('');
  // const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  // const [locationFilter, setLocationFilter] = useState('');
  // const [priceFilter, setPriceFilter] = useState('');

  // const filteredArtists = mockArtists.filter(artist => {
  //   const matchesSearch =
  //     artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     artist.specialty.toLowerCase().includes(searchTerm.toLowerCase());
  //   const matchesLocation = locationFilter
  //     ? artist.location === locationFilter
  //     : true;
  //   const matchesPrice = priceFilter
  //     ? priceFilter === 'under50'
  //       ? artist.price < 50
  //       : priceFilter === '50to100'
  //       ? artist.price >= 50 && artist.price <= 100
  //       : artist.price > 100
  //     : true;

  //   return matchesSearch && matchesLocation && matchesPrice;
  // });

  // const locations = Array.from(
  //   new Set(mockArtists.map(artist => artist.location)),
  // );

  // const renderRatingStars = (rating: number) => {
  //   const stars = [];
  //   const fullStars = Math.floor(rating);
  //   const hasHalfStar = rating % 1 >= 0.5;

  //   for (let i = 0; i < fullStars; i++) {
  //     stars.push(
  //       <Text key={`full-${i}`} style={styles.starIcon}>
  //         ★
  //       </Text>,
  //     );
  //   }

  //   if (hasHalfStar) {
  //     stars.push(
  //       <Text key="half" style={styles.starIcon}>
  //         ☆
  //       </Text>,
  //     );
  //   }

  //   const emptyStars = 5 - stars.length;
  //   for (let i = 0; i < emptyStars; i++) {
  //     stars.push(
  //       <Text key={`empty-${i}`} style={styles.starIcon}>
  //         ☆
  //       </Text>,
  //     );
  //   }

  //   return <View style={styles.starContainer}>{stars}</View>;
  // };

  // const renderArtistCard = ({item}: {item: Artist}) => (
  //   <TouchableOpacity
  //     style={styles.artistCard}
  //     onPress={() => setSelectedArtist(item)}>
  //     <Image source={{uri: item.image}} style={styles.artistImage} />
  //     <View style={styles.artistInfo}>
  //       <Text style={styles.artistName}>{item.name}</Text>
  //       <Text style={styles.artistSpecialty}>{item.specialty}</Text>
  //       <View style={styles.ratingContainer}>
  //         {renderRatingStars(item.rating)}
  //         <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
  //         <Text style={styles.priceText}>${item.price}/hr</Text>
  //       </View>
  //     </View>
  //   </TouchableOpacity>
  // );

  // if (selectedArtist) {
  //   return (
  //     <ScrollView style={styles.container}>
  //       <View style={styles.header}>
  //         <TouchableOpacity onPress={() => setSelectedArtist(null)}>
  //           <Text style={styles.backButton}>← Back</Text>
  //         </TouchableOpacity>
  //         <Text style={styles.headerTitle}>Artist Details</Text>
  //         <View style={{width: 50}} />
  //       </View>

  //       <Image
  //         source={{uri: selectedArtist.image}}
  //         style={styles.detailImage}
  //       />

  //       <View style={styles.detailContent}>
  //         <Text style={styles.detailName}>{selectedArtist.name}</Text>
  //         <Text style={styles.detailSpecialty}>{selectedArtist.specialty}</Text>

  //         <View style={styles.detailRow}>
  //           <Text style={styles.detailIcon}>📍</Text>
  //           <Text style={styles.detailText}>{selectedArtist.location}</Text>
  //         </View>

  //         <View style={styles.detailRow}>
  //           {renderRatingStars(selectedArtist.rating)}
  //           <Text style={styles.detailText}>
  //             {selectedArtist.rating.toFixed(1)} Rating
  //           </Text>
  //         </View>

  //         <View style={styles.detailRow}>
  //           <Text style={styles.detailIcon}>💲</Text>
  //           <Text style={styles.detailText}>${selectedArtist.price}/hour</Text>
  //         </View>

  //         <Text style={styles.sectionTitle}>Services Offered</Text>
  //         <View style={styles.servicesContainer}>
  //           {selectedArtist.services.map((service, index) => (
  //             <View key={index} style={styles.serviceTag}>
  //               <Text style={styles.serviceText}>{service}</Text>
  //             </View>
  //           ))}
  //         </View>

  //         <Text style={styles.sectionTitle}>About</Text>
  //         <Text style={styles.detailBio}>{selectedArtist.bio}</Text>

  //         <Text style={styles.sectionTitle}>Reviews</Text>
  //         {selectedArtist.reviews.map((review, index) => (
  //           <View key={index} style={styles.reviewCard}>
  //             <View style={styles.reviewHeader}>
  //               <Text style={styles.reviewAuthor}>{review.author}</Text>
  //               <View style={styles.reviewRating}>
  //                 {renderRatingStars(review.rating)}
  //                 <Text style={styles.reviewDate}>{review.date}</Text>
  //               </View>
  //             </View>
  //             <Text style={styles.reviewComment}>{review.comment}</Text>
  //           </View>
  //         ))}

  //         <TouchableOpacity
  //           style={styles.bookButton}
  //           onPress={() =>
  //             Alert.alert(
  //               'Booking',
  //               `Booking request sent to ${selectedArtist.name}`,
  //             )
  //           }>
  //           <Text style={styles.bookButtonText}>Book Appointment</Text>
  //         </TouchableOpacity>
  //       </View>
  //     </ScrollView>
  //   );
  // }

  // if (activeScreen === 'login') {
  //   return <Login activeScreen={activeScreen} />;
  // }

  // if (activeScreen === 'client') {
  //   return (
  //     <View style={styles.container}>
  //       <View style={styles.header}>
  //         <Text style={styles.headerTitle}>Find Makeup Artists</Text>
  //         <TouchableOpacity onPress={() => setActiveScreen('login')}>
  //           <Text style={styles.logoutButton}>Logout</Text>
  //         </TouchableOpacity>
  //       </View>

  //       <View style={styles.searchContainer}>
  //         <Text style={styles.searchIcon}>🔍</Text>
  //         <TextInput
  //           style={styles.searchInput}
  //           placeholder="Search artists or specialties..."
  //           value={searchTerm}
  //           onChangeText={setSearchTerm}
  //           placeholderTextColor="#999"
  //         />
  //       </View>

  //       <View style={styles.filterContainer}>
  //         <View style={styles.filterRow}>
  //           <Text style={styles.filterLabel}>Location:</Text>
  //           <TouchableOpacity
  //             style={styles.filterSelect}
  //             onPress={() => {
  //               Alert.alert('Filter by Location', 'Select a location', [
  //                 {text: 'All', onPress: () => setLocationFilter('')},
  //                 ...locations.map(location => ({
  //                   text: location,
  //                   onPress: () => setLocationFilter(location),
  //                 })),
  //                 {text: 'Cancel', style: 'cancel'},
  //               ]);
  //             }}>
  //             <Text style={styles.filterValue}>{locationFilter || 'All'}</Text>
  //             <Text style={styles.filterArrow}>▼</Text>
  //           </TouchableOpacity>
  //         </View>

  //         <View style={styles.filterRow}>
  //           <Text style={styles.filterLabel}>Price Range:</Text>
  //           <TouchableOpacity
  //             style={styles.filterSelect}
  //             onPress={() => {
  //               Alert.alert('Filter by Price', 'Select a price range', [
  //                 {text: 'All', onPress: () => setPriceFilter('')},
  //                 {text: 'Under $50', onPress: () => setPriceFilter('under50')},
  //                 {text: '$50-$100', onPress: () => setPriceFilter('50to100')},
  //                 {text: 'Over $100', onPress: () => setPriceFilter('over100')},
  //                 {text: 'Cancel', style: 'cancel'},
  //               ]);
  //             }}>
  //             <Text style={styles.filterValue}>
  //               {priceFilter === 'under50'
  //                 ? 'Under $50'
  //                 : priceFilter === '50to100'
  //                 ? '$50-$100'
  //                 : priceFilter === 'over100'
  //                 ? 'Over $100'
  //                 : 'All'}
  //             </Text>
  //             <Text style={styles.filterArrow}>▼</Text>
  //           </TouchableOpacity>
  //         </View>
  //       </View>

  //       <FlatList
  //         data={filteredArtists}
  //         renderItem={renderArtistCard}
  //         keyExtractor={item => item.id.toString()}
  //         contentContainerStyle={styles.listContainer}
  //         ListEmptyComponent={
  //           <View style={styles.emptyContainer}>
  //             <Text style={styles.emptyText}>
  //               No artists found matching your criteria
  //             </Text>
  //           </View>
  //         }
  //       />
  //     </View>
  //   );
  // }

  // if (activeScreen === 'artist') {
  //   return (
  //     <View style={styles.container}>
  //       <View style={styles.header}>
  //         <Text style={styles.headerTitle}>Artist Dashboard</Text>
  //         <TouchableOpacity onPress={() => setActiveScreen('login')}>
  //           <Text style={styles.logoutButton}>Logout</Text>
  //         </TouchableOpacity>
  //       </View>

  //       <ScrollView contentContainerStyle={styles.dashboardContainer}>
  //         <View style={styles.profileHeader}>
  //           <Image
  //             source={{uri: 'https://randomuser.me/api/portraits/women/33.jpg'}}
  //             style={styles.profileImage}
  //           />
  //           <View style={styles.profileInfo}>
  //             <Text style={styles.profileName}>Your Profile</Text>
  //             <Text style={styles.profileLocation}>New York, NY</Text>
  //             <View style={styles.profileRating}>
  //               {renderRatingStars(4.7)}
  //               <Text style={styles.ratingText}>4.7 (24 reviews)</Text>
  //             </View>
  //           </View>
  //         </View>

  //         <View style={styles.statsContainer}>
  //           <View style={styles.statCard}>
  //             <Text style={styles.statNumber}>12</Text>
  //             <Text style={styles.statLabel}>Upcoming</Text>
  //           </View>
  //           <View style={styles.statCard}>
  //             <Text style={styles.statNumber}>87%</Text>
  //             <Text style={styles.statLabel}>Booked</Text>
  //           </View>
  //           <View style={styles.statCard}>
  //             <Text style={styles.statNumber}>4.7</Text>
  //             <Text style={styles.statLabel}>Rating</Text>
  //           </View>
  //         </View>

  //         <Text style={styles.sectionTitle}>Quick Actions</Text>
  //         <View style={styles.actionsContainer}>
  //           <TouchableOpacity
  //             style={styles.actionButton}
  //             onPress={() =>
  //               Alert.alert('Calendar', 'Calendar view would open here')
  //             }>
  //             <Text style={styles.actionIcon}>📅</Text>
  //             <Text style={styles.actionText}>View Calendar</Text>
  //           </TouchableOpacity>
  //           <TouchableOpacity
  //             style={styles.actionButton}
  //             onPress={() =>
  //               Alert.alert('Bookings', 'Bookings view would open here')
  //             }>
  //             <Text style={styles.actionIcon}>💼</Text>
  //             <Text style={styles.actionText}>Manage Bookings</Text>
  //           </TouchableOpacity>
  //           <TouchableOpacity
  //             style={styles.actionButton}
  //             onPress={() =>
  //               Alert.alert('Profile', 'Profile editor would open here')
  //             }>
  //             <Text style={styles.actionIcon}>✏️</Text>
  //             <Text style={styles.actionText}>Edit Profile</Text>
  //           </TouchableOpacity>
  //           <TouchableOpacity
  //             style={styles.actionButton}
  //             onPress={() =>
  //               Alert.alert(
  //                 'Availability',
  //                 'Availability settings would open here',
  //               )
  //             }>
  //             <Text style={styles.actionIcon}>⏰</Text>
  //             <Text style={styles.actionText}>Set Availability</Text>
  //           </TouchableOpacity>
  //         </View>

  //         <Text style={styles.sectionTitle}>Recent Bookings</Text>
  //         <View style={styles.bookingCard}>
  //           <View style={styles.bookingHeader}>
  //             <Text style={styles.bookingTitle}>Sarah Miller</Text>
  //             <Text style={styles.bookingDate}>Today, 2:00 PM</Text>
  //           </View>
  //           <Text style={styles.bookingService}>Bridal Makeup - 2 hours</Text>
  //           <View style={styles.bookingActions}>
  //             <TouchableOpacity style={styles.bookingActionButton}>
  //               <Text style={styles.bookingActionText}>Confirm</Text>
  //             </TouchableOpacity>
  //             <TouchableOpacity
  //               style={[styles.bookingActionButton, styles.declineButton]}>
  //               <Text
  //                 style={[styles.bookingActionText, styles.declineButtonText]}>
  //                 Decline
  //               </Text>
  //             </TouchableOpacity>
  //           </View>
  //         </View>

  //         <View style={styles.bookingCard}>
  //           <View style={styles.bookingHeader}>
  //             <Text style={styles.bookingTitle}>Jessica Brown</Text>
  //             <Text style={styles.bookingDate}>Tomorrow, 10:00 AM</Text>
  //           </View>
  //           <Text style={styles.bookingService}>
  //             Editorial Makeup - 3 hours
  //           </Text>
  //           <Text style={styles.bookingStatus}>Confirmed</Text>
  //         </View>
  //       </ScrollView>
  //     </View>
  //   );
  // }

  return null;
};

export default AppPro;
