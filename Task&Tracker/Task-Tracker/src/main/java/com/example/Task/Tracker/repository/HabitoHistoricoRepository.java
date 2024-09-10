package com.example.Task.Tracker.repository;

import com.example.Task.Tracker.model.HabitosHistoricos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HabitoHistoricoRepository extends JpaRepository<HabitosHistoricos, Long> {
}
