import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserPokemon } from "../store/session";

function Pokemon({}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [editContent, setEditContent] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState(sessionUser?.pokemonId);
  const [selected, setSelected] = useState("");
  const [errors, setErrors] = useState([]);

  console.log(sessionUser);

  const handleCancel = () => {
    setEditContent(false);
    setCurrentPokemon(sessionUser?.pokemonId);
  };

  const handleEdit = () => {
    setEditContent(true);
  };

  const changePokemon = (e) => {
    e.preventDefault();
    setErrors([]);

    dispatch(editUserPokemon(sessionUser?.id, currentPokemon))
      .then((res) => {
        setEditContent(false);
      })
      .catch(async (res) => {
        const data = await res.json();

        if (data && data.errors) {
          setCurrentPokemon(sessionUser?.pokemonId);
          setEditContent(false);
          setErrors(data.errors);
        }
      });
  };

  return (
    <>
      {!editContent && (
        <div>
          <button onClick={handleEdit}>Edit</button>
          <p>{sessionUser?.pokemonId}</p>
        </div>
      )}

      {editContent && (
        <>
          <form onSubmit={changePokemon}>
            <select
              name="currentPokemon"
              onClick={(e) => {
                setCurrentPokemon(e.target.value);
              }}
              onChange={(e) => setSelected(e.target.value)}
              value={selected}
            >
              <option value="1">Bulbasaur</option>
              <option value="2">Ivysaur</option>
              <option value="3">Venasaur</option>
              <option value="4">Charmander</option>
              <option value="5">Charmeleon</option>
              <option value="6">Charizard</option>
              <option value="7">Squirtle</option>
              <option value="8">Wartortle</option>
              <option value="9">Blastoise</option>
              <option value="10">Caterpie</option>
              <option value="11">Metapod</option>
              <option value="12">Butterfree</option>
              <option value="13">Weedle</option>
              <option value="14">Kakuna</option>
              <option value="15">Beedrill</option>
              <option value="16">Pidgey</option>
              <option value="17">Pidgeotto</option>
              <option value="18">Pidgeot</option>
              <option value="19">Rattata</option>
              <option value="20">Raticate</option>
              <option value="21">Spearow</option>
              <option value="22">Fearow</option>
              <option value="23">Ekans</option>
              <option value="24">Arbok</option>
              <option value="25">Pikachu</option>
              <option value="26">Raichu</option>
              <option value="27">Sandshrew</option>
              <option value="28">Sandslash</option>
              <option value="29">Nidoran♀</option>
              <option value="30">Nidorina</option>
              <option value="31">Nidoqueen</option>
              <option value="32">Nidoran♂</option>
              <option value="33">Nidorino</option>
              <option value="34">Nidoking</option>
              <option value="35">Clefairy</option>
              <option value="36">Clefable</option>
              <option value="37">Vulpix</option>
              <option value="38">Ninetales</option>
              <option value="39">Jigglypuff</option>
              <option value="40">Wigglytuff</option>
              <option value="41">Zubat</option>
              <option value="42">Golbat</option>
              <option value="43">Oddish</option>
              <option value="44">Gloom</option>
              <option value="45">Vileplume</option>
              <option value="46">Paras</option>
              <option value="47">Parasect</option>
              <option value="48">Venonat</option>
              <option value="49">Venomoth</option>
              <option value="50">Diglett</option>
              <option value="51">Dugtrio</option>
              <option value="52">Meowth</option>
              <option value="53">Persian</option>
              <option value="54">Psyduck</option>
              <option value="55">Golduck</option>
              <option value="56">Mankey</option>
              <option value="57">Primeape</option>
              <option value="58">Growlithe</option>
              <option value="59">Arcanine</option>
              <option value="60">Poliwag</option>
              <option value="61">Poliwhirl</option>
              <option value="62">Poliwrath</option>
              <option value="63">Abra</option>
              <option value="64">Kadabra</option>
              <option value="65">Alakazam</option>
              <option value="66">Machop</option>
              <option value="67">Machoke</option>
              <option value="68">Machamp</option>
              <option value="69">Bellsprout</option>
              <option value="70">Weepinbell</option>
              <option value="71">Victreebel</option>
              <option value="72">Tentacool</option>
              <option value="73">Tentacruel</option>
              <option value="74">Geodude</option>
              <option value="75">Graveler</option>
              <option value="76">Golem</option>
              <option value="77">Ponyta</option>
              <option value="78">Rapidash</option>
              <option value="79">Slowpoke</option>
              <option value="80">Slowbro</option>
              <option value="81">Magnemite</option>
              <option value="82">Magneton</option>
              <option value="83">Farfetch’d</option>
              <option value="84">Doduo</option>
              <option value="85">Dodrio</option>
              <option value="86">Seel</option>
              <option value="87">Dewgong</option>
              <option value="88">Grimer</option>
              <option value="89">Muk</option>
              <option value="90">Shellder</option>
              <option value="91">Cloyster</option>
              <option value="92">Gastly</option>
              <option value="93">Haunter</option>
              <option value="94">Gengar</option>
              <option value="95">Onix</option>
              <option value="96">Drowzee</option>
              <option value="97">Hypno</option>
              <option value="98">Krabby</option>
              <option value="99">Kingler</option>
              <option value="100">Voltorb</option>
              <option value="101">Electrode</option>
              <option value="102">Exeggcute</option>
              <option value="103">Exeggutor</option>
              <option value="104">Cubone</option>
              <option value="105">Marowak</option>
              <option value="106">Hitmonlee</option>
              <option value="107">Hitmonchan</option>
              <option value="108">Lickitung</option>
              <option value="109">Koffing</option>
              <option value="110">Weezing</option>
              <option value="111">Rhyhorn</option>
              <option value="112">Rhydon</option>
              <option value="113">Chansey</option>
              <option value="114">Tangela</option>
              <option value="115">Kangaskhan</option>
              <option value="116">Horsea</option>
              <option value="117">Seadra</option>
              <option value="118">Goldeen</option>
              <option value="119">Seaking</option>
              <option value="120">Staryu</option>
              <option value="121">Starmie</option>
              <option value="122">Mr. Mime</option>
              <option value="123">Scyther</option>
              <option value="124">Jynx</option>
              <option value="125">Electabuzz</option>
              <option value="126">Magmar</option>
              <option value="127">Pinsir</option>
              <option value="128">Tauros</option>
              <option value="129">Magikarp</option>
              <option value="130">Gyarados</option>
              <option value="131">Lapras</option>
              <option value="132">Ditto</option>
              <option value="133">Eevee</option>
              <option value="134">Vaporeon</option>
              <option value="135">Jolteon</option>
              <option value="136">Flareon</option>
              <option value="137">Porygon</option>
              <option value="138">Omanyte</option>
              <option value="139">Omastar</option>
              <option value="140">Kabuto</option>
              <option value="141">Kabutops</option>
              <option value="142">Aerodactyl</option>
              <option value="143">Snorlax</option>
              <option value="144">Articuno</option>
              <option value="145">Zapdos</option>
              <option value="146">Moltres</option>
              <option value="147">Dratini</option>
              <option value="148">Dragonair</option>
              <option value="149">Dragonite</option>
              <option value="150">Mewtwo</option>
            </select>
            <div className="add-comment-bttn-box">
              <button id="edit-comment-bttn" className="bttn" type="submit">
                Save
              </button>
              <button
                id="edit-comment-bttn"
                className="bttn"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
}

export default Pokemon;
