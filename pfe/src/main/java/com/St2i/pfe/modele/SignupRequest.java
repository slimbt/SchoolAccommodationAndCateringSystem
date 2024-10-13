package com.St2i.pfe.modele;

import jakarta.validation.constraints.*;

import java.util.Set;

public class SignupRequest {
	@NotBlank
	@Size(min = 3, max = 20)
	private String username;

	@NotBlank
	@Size(max = 50)
	@Email
	private String email;

	private Set<String> role;

	@NotBlank
	@Size(min = 6, max = 40)
	private String password;



	@Size(max = 50)
	private String nom;


	@Size(max = 50)
	private String prenom;



	private int cin;


	@Size( max = 40)
	private String poste;

 private String profession;

 private String adresse;

	private int telephone;

	private String photoPath;

	public String getPhotoPath() {
		return photoPath;
	}

	public void setPhotoPath(String photoPath) {
		this.photoPath = photoPath;
	}

	public String getNom() {return nom;}

	public void setNom(String nom) {this.nom = nom;}

	public String getPrenom() {return prenom;}

	public void setPrenom(String prenom) {this.prenom = prenom;}

	public int getCin() {
		return cin;
	}

	public void setCin(int cin) {
		this.cin = cin;
	}

	public String getPoste() {
		return poste;
	}

	public void setPoste(String poste) {
		this.poste = poste;
	}

	public String getProfession(){  return profession;}
	public void setProfession(String profession) {this.profession=profession;}
	public String getAdresse(){  return adresse;}
	public void setAdresse(String adresse) {this.adresse=adresse;}

	public int getTelephone() {
		return telephone;
	}

	public void setTelephone(int telephone) {
		this.telephone = telephone;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}



	public Set<String> getRole() {
		return this.role;
	}

	public void setRole(Set<String> role) {
		this.role = role;
	}
}